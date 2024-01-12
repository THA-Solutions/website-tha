import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { ImageService } from '../image/image.service';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService, ImageService],
  imports: [CloudinaryModule],
  exports: [CompanyService]
})
export class CompanyModule {}
