import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [ArticleController],
  imports: [CloudinaryModule],
  providers: [ArticleService, PrismaService]
})
export class ArticleModule {}
