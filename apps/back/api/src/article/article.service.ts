import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Article } from '@prisma/client';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import PrismaService from '../prisma.service';
import { ResponseArticleDto } from './dto/response-article.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
@Injectable()
export class ArticleService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private cloudinary: CloudinaryService
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
    image: Express.Multer.File
  ): Promise<ResponseArticleDto> {
    try {
      let {imageSrc, ...data} = createArticleDto;
      let article = await this.prisma.article.create({
        data: data
      });

      let url = '';

      if (image) {
        url = await this.cloudinary.uploadImage(image);
        await this.prisma.image.create({
          data: {
            url: url,
            imageSrc: imageSrc,
            id_origem: article.id
          }
        });
      }

      const returnArticle = {
        ...article,
        imageUrl: url
      };

      return returnArticle;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<ResponseArticleDto[]> {
    try {
      let articles = await this.prisma.article.findMany();

      const returnArticles = await Promise.all(
        articles.map(async (article) => {
          const image = await this.prisma.image.findFirst({
            select: {
              url: true
            },
            where: { id_origem: article.id }
          });

          const returnArticle = {
            ...article,
            imageUrl: image?.url || ''
          };

          return returnArticle;
        })
      );

      return returnArticles;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<ResponseArticleDto> {
    try {
      let article = await this.prisma.article.findFirst({
        where: { id }
      });

      const image = await this.prisma.image.findFirst({
        select: {
          url: true
        },
        where: { id_origem: id }
      });

      const returnArticle = {
        ...article,
        imageUrl: image?.url
      } as ResponseArticleDto;

      return returnArticle;
    } catch (error) {
      throw new Error(error);
    }
  }

  update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    try {
      const article = this.prisma.article.update({
        where: { id },
        data: updateArticleDto
      });
      return article;
    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: string): Promise<Article> | null {
    try {
      const article = this.prisma.article.delete({
        where: { id }
      });
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
