import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PrismaService from '../prisma.service';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { ResponseUserDto } from './dto/response-user.dto';
import { ImageService } from '../image/image.service';
import { CompanyService } from '../company/company.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private companyService: CompanyService,
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
      const user = await this.prisma.user
        .findFirst({
          where: { email: createUserDto.email }
        })
        .then(async (user) => {
          if (user) {
            throw Error('User already exists');
          }

          if (createUserDto.role === 'customer' && createUserDto?.company) {
            const company = await this.companyService
              .findByTitle(createUserDto.company!)
              .then((company) => {
                if (!company) {
                  throw Error('Company not found');
                }
                createUserDto.company = company.id;
                return company;
              });
          }

          createUserDto.password = this.crypter(createUserDto.password);

          const createdUser = await this.prisma.user
            .create({
              data: createUserDto
            })
            .then(async (user) => {
              if (!user) {
                throw Error('User not found');
              }

              return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                company: createUserDto.company ? createUserDto.company : null
              };
            });
          return createdUser as ResponseUserDto;
        });

      return user as ResponseUserDto;
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
            image: image ? image.url : null
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
          image: image ? image.url : null
        };
      })
    );

    return returnUser as ResponseUserDto[];
  }
  async findOne(id: string): Promise<any> {
    try {
      let user = await this.prisma.user
        .findUnique({
          where: { id }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }

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

          return {
            id: user!.id,
            firstName: user!.firstName,
            lastName: user!.lastName,
            email: user!.email,
            image: image ? image.url : null
          };
        });

      return user;
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
            image: image ? image.url : null,
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
      await this.prisma.user
        .findUnique({
          where: { id }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }
          const imageUpdt = await this.imageService.updateByOrigin(
            { id_origem: id, source: image.filename, alt: image.originalname },
            image
          );

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: imageUpdt.url
          };
        });
      return;
    } catch (error) {
      throw Error(`Error in update user image ${error}`);
    }
  }
  async remove(id: string) {
    try {
      return this.prisma.user
        .delete({
          where: { id }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }

          await this.imageService.deleteAll(id);

          return;
        });
    } catch (error) {
      throw Error(`Error in delete user ${error}`);
    }
  }
}
