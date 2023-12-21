import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService, ImageService],
  imports: [CloudinaryModule]
})
export class ArticleModule {}
