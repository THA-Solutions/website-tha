import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { ImageService } from '../image/image.service';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [BrandController],
  providers: [BrandService, PrismaService, ImageService],
  imports: [CloudinaryModule]
})
export class BrandModule {}
