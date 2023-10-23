import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [ImageController],
  providers: [ImageService, PrismaService],
  imports: [CloudinaryModule]
})
export class ImageModule {}
