import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import PrismaService from '../prisma.service';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
@Injectable()
export class ClientService {
    constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
  ) {}

    crypter(password: string) {
    try {
      const iv = Buffer.from(crypto.randomBytes(16));

      const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        this.configService.get<string>('CRYPTO_SECRET')!,
        iv,
      );

      let crypted = cipher.update(password, 'utf8', 'hex');
      crypted += cipher.final('hex');

      password = `${iv.toString('hex')}:${crypted}`;
      
      return password;
    } catch (error) {
      throw Error(`Error in cryptography ${error}`);
    }
  }

  async create(createClientDto: CreateClientDto):Promise<CreateClientDto> {
    try {
      
      const client= await this.prisma.client.findFirst({
        where: { email: createClientDto.email },
      });
      if (client) {
        throw Error('User already exists');
      }

      createClientDto.password = this.crypter(createClientDto.password);

      const createdClient = await this.prisma.client.create({
        data: createClientDto,
      });

      const returnClient = {
        name: createdClient.name,
        email: createdClient.email,
      };

      return returnClient as CreateClientDto;
    } catch (error) {
      throw Error(`Error in create user ${error}`);
    }
  }

  async findAll() {
    try {
      const clients= await this.prisma.client.findMany();
  
      const returnClients = clients.map((client) => {
        return {
          name: client.name,
          email: client.email,
        };
      });
      return returnClients;
    } catch (error) {
      throw Error(`Error in find all users ${error}`);
    }
  }

  async findOne(id: string) {
    try {
      const client = await this.prisma.client.findUnique({
        where: { id },
      });
  
      const returnClient = {
        name: client!.name,
        email: client!.email,
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
        data: updateClientDto,
      });
      return
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  remove(id: string) {
    try {
      const client = this.prisma.client.delete({
        where: { id: id },
      });
      return;
    } catch (error) {
      throw Error(`Error in delete user ${error}`);
    }
  }
}
