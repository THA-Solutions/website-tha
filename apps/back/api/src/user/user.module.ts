import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import PrismaService from '../prisma.service';
import { ClientService } from '../client/client.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [UserController],
  imports: [CloudinaryModule],
  providers: [UserService, PrismaService, ClientService],
  exports: [UserService],
})
export class UserModule { }
