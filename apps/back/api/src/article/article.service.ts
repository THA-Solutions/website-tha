import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Article } from '@prisma/client';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import PrismaService from '../prisma.service';

@Injectable()
export class ArticleService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) { }

  create(createArticleDto: CreateArticleDto): Promise<Article> {
    try {
      const article = this.prisma.article.create({ data: createArticleDto });
      return article;
    } catch (error) {
      throw new Error(error);
    }


  }

  findAll(): Promise<Article[]> {
    try {
      const articles = this.prisma.article.findMany();
      return articles;
    } catch (error) {
      throw new Error(error);
    }
  }

  findOne(id: string): Promise<Article | null> {
    try {
      const article = this.prisma.article.findFirst({
        where: { id },
      });
      return article;
    } catch (error) {
      throw new Error(error);
    }

  }

  update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    try {
      const article = this.prisma.article.update({
        where: { id },
        data: updateArticleDto,
      });
      return article;
    } catch (error) {
      throw new Error(error);
    }

  }

  remove(id: string): Promise<Article> | null {
    try {
      const article = this.prisma.article.delete({
        where: { id },
      });
      return null;
    } catch (error) {
      throw new Error(error);
    }

  }
}
