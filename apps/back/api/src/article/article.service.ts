import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import PrismaService from '../prisma.service';
import { ResponseArticleDto } from './dto/response-article.dto';
import { ResponseImageDto } from '../image/dto/response-image.dto';
import { ImageService } from '../image/image.service';

@Injectable()
export class ArticleService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImageService
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
    image: Express.Multer.File[]
  ): Promise<ResponseArticleDto> {
    try {
      let { imageSrc, ...data } = createArticleDto;
      let article = await this.prisma.article.create({
        data: data
      });

      let articleImage: ResponseImageDto[] = [{}] as ResponseImageDto[];

      if (image) {
        articleImage = await Promise.all(
          image.map(async (image) => {
            const imageUrl = await this.imageService.create(
              { id_origem: article.id, imageSrc },
              image
            );
            return imageUrl;
          })
        );
      }

      const returnArticle = {
        ...article,
        image:articleImage
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
          //Percorre o array de artigos e retorna um array de objetos com os dados do usuário e a url da imagem
          const image = await this.imageService.findByOrigin(article.id);

          const returnArticle = {
            ...article,
            image
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

      const image = await this.imageService.findByOrigin(article!.id);

      const returnArticle = {
        ...article!,
        image
      };

      return returnArticle;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByCategory(category: string): Promise<ResponseArticleDto[]> {
    try {
      let articles = await this.prisma.article.findMany({
        where: { category }
      });

      const returnArticles = await Promise.all(
        articles.map(async (article) => {
          //Percorre o array de artigos e retorna um array de objetos com os dados do usuário e a url da imagem
          const image = await this.imageService.findByOrigin(article.id);

          const returnArticle = {
            ...article,
            image
          };

          return returnArticle;
        })
      );

      return returnArticles;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
    image?: Express.Multer.File
  ): Promise<Article> {
    try {
      let { imageSrc, ...data } = updateArticleDto;

      const article = this.prisma.article.update({
        where: { id },
        data: data
      });

      if (image) {
        imageSrc = imageSrc ? imageSrc : '';
        const imageUrl = await this.imageService.create(
          { id_origem: id, imageSrc },
          image
        );
      }

      const returnArticle = {
        ...article,
        image
      };

      return returnArticle;

    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: string) {
    try {
      this.prisma.article.delete({
        where: { id }
      });

      this.imageService.removeAll(id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
