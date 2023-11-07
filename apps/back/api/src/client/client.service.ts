import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import PrismaService from '../prisma.service';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { ResponseClientDto } from './dto/response-client.dto';
import { ImageService } from '../image/image.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';
@Injectable()
export class ClientService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private imageService: ImageService
  ) {}

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

  async create(
    createClientDto: CreateClientDto,
    imageFile?: Express.Multer.File
  ): Promise<ResponseClientDto> {
    try {
      let { image, ...data } = createClientDto;

      const client = await this.prisma.client.findFirst({
        where: { email: data.email }
      });

      if (client) {
        throw Error('User already exists');
      }

      createClientDto.password = this.crypter(createClientDto.password);

      const createdClient = await this.prisma.client.create({
        data: data
      });

      let clientImage: ResponseImageDto = {} as ResponseImageDto;

      if (imageFile) {
        clientImage = await this.imageService.create(
          {
            id_origem: createdClient.id,
            source: image.source,
            alt: image.alt,
            pos: 0
          },
          imageFile
        );
      }

      const returnClient = {
        name: createdClient.name,
        email: createdClient.email,
        image: clientImage
      };

      return returnClient as ResponseClientDto;
    } catch (error) {
      throw Error(`Error in create user ${error}`);
    }
  }

  async findAll() {
    try {
      const clients = await this.prisma.client.findMany();

      const returnClients = await Promise.all(
        clients.map(async (client) => {
          let image = await this.imageService.findByOrigin(client.id);

          return {
            ...client,
            imageUrl: image[0]?.url || ''
          };
        })
      );

      return returnClients;
    } catch (error) {
      throw Error(`Error in find all users ${error}`);
    }
  }

  async findOne(id: string) {
    try {
      const client = await this.prisma.client.findUnique({
        where: { id }
      });

      const image = await this.imageService.findByOrigin(client!.id);

      const returnClient = {
        name: client!.name,
        email: client!.email,
        imageUrl: image[0]?.url || ''
      };
      return returnClient;
    } catch (error) {
      throw Error(`Error in find user ${error}`);
    }
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    try {
      const client = this.prisma.client.update({
        where: { id: id },
        data: updateClientDto
      });
      return client;
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.client.delete({
        where: { id: id }
      });
      await this.imageService.removeAll(id);
      return 'User deleted';
    } catch (error) {
      throw Error(`Error in delete user ${error}`);
    }
  }
}
