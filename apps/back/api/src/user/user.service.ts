import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PrismaService from '../prisma.service';
import { User } from '@prisma/client';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { ResponseUserDto } from './dto/response-user.dto';
import { ResponseImageDto } from '../image/dto/response-image.dto';
import { ImageService } from '../image/image.service';
import { BrandService } from '../brand/brand.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private companyService: BrandService,
    private imageService: ImageService
  ) {}

  //Criptografa a senha do usuário de acordo com a chave de criptografia definida no arquivo .env e protocolo AES-256-CBC
  crypter(password: string) {
    try {
      const iv = Buffer.from(crypto.randomBytes(16));

      const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        this.configService.get<string>('CRYPTO_SECRET')!,
        iv
      );

      let crypted = cipher.update(password, 'utf8', 'hex');
      crypted += cipher.final('hex');

      password = `${iv.toString('hex')}:${crypted}`;

      return password;
    } catch (error) {
      throw Error(`Error in cryptography ${error}`);
    }
  }

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: createUserDto.email }
      });

      if (user) {
        throw Error('User already exists');
      } else {
        if (createUserDto.role === 'customer' && createUserDto?.company) {
          const company = await this.companyService.findByTitle(
            createUserDto.company!
          );
          if (!company) {
            throw Error('Company not found');
          }
          createUserDto.company = company.id;
        }
        createUserDto.password = this.crypter(createUserDto.password);

        const createdUser = await this.prisma.user.create({
          data: createUserDto
        });

        const returnUser = {
          id: createdUser.id,
          firstName: createdUser.firstName,
          lastName: createdUser.lastName,
          email: createdUser.email,
          role: createdUser.role,
          company: createUserDto.company ? createUserDto.company : ''
        };

        return returnUser as ResponseUserDto;
      }
    } catch (error) {
      throw Error(`Error in create user ${error}`);
    }
  }

  async findAll(): Promise<ResponseUserDto[]> {
    try {
      const users = await this.prisma.user.findMany();

      const returnUser = await Promise.all(
        //Percorre o array de usuários e retorna um array de objetos com os dados do usuário e a url da imagem
        users.map(async (user) => {
          let image = await this.prisma.image.findFirst({
            select: {
              url: true
            },
            where: {
              id_origem: user.id
            }
          });
          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            image: image ? image.url : ''
          };
        })
      );

      return returnUser as ResponseUserDto[];
    } catch (error) {
      throw Error(`Error in find all users ${error}`);
    }
  }

  async findByRole(role: string): Promise<ResponseUserDto[]> {
    const users = await this.prisma.user.findMany({
      where: { role }
    });

    const returnUser = await Promise.all(
      //Percorre o array de usuários e retorna um array de objetos com os dados do usuário e a url da imagem
      users.map(async (user) => {
        let image = await this.prisma.image.findFirst({
          select: {
            url: true
          },
          where: {
            id_origem: user.id
          }
        });
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          image: image ? image.url : ''
        };
      })
    );

    return returnUser as ResponseUserDto[];
  }
  async findOne(id: string): Promise<any> {
    try {
      let user = await this.prisma.user.findUnique({
        where: { id }
      });

      const image = await this.prisma.image.findFirst({
        select: {
          url: true,
          source: true,
          alt: true
        },
        where: {
          id_origem: id
        }
      });

      const returnUser = {
        id: user!.id,
        firstName: user!.firstName,
        lastName: user!.lastName,
        email: user!.email,
        image: image ? image.url : ''
      };

      return returnUser;
    } catch (error) {
      throw Error(`Error in find user by id ${error}`);
    }
  }

  async findByEmail(email: string): Promise<ResponseUserDto> {
    try {
      //Busca o usuário pelo email e sua respectiva imagem e retorna um objeto com os dados do usuário e a url da imagem
      const user = await this.prisma.user
        .findFirst({
          where: {
            email: email
          }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }

          const image = await this.prisma.image.findFirst({
            where: {
              id_origem: user.id
            }
          });

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: image ? image.url : '',
            password: user.password,
            role: user.role
          };
        });

      return user as ResponseUserDto;
    } catch (error) {
      throw Error(`Error in find user by email ${error}`);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.prisma.user.update({
        where: { id },
        data: updateUserDto
      });
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  async updateImage(id: string, image: Express.Multer.File) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id }
      });
      if (!user) {
        throw Error('User not found');
      }

      const imageUpdt = await this.imageService.updateByOrigin(
        { id_origem: id, source: null, alt: null },
        image
      );
      return;
    } catch (error) {
      throw Error(`Error in update user image ${error}`);
    }
  }
  remove(id: string): Promise<User> | null {
    try {
      const user = this.prisma.user.delete({
        where: { id }
      });

      return user;
    } catch (error) {
      throw Error(`Error in delete user ${error}`);
    }
  }
}
