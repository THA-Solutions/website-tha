import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { ImageService } from '../image/image.service';
import { CompanyService } from '../company/company.service';
import { MailService } from '../mail/mail.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, ImageService, CompanyService, MailService],
  exports: [UserService],
  imports: [CloudinaryModule]
})
export class UserModule {}
