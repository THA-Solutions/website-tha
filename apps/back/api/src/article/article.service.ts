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
    imageFile: Express.Multer.File[]
  ): Promise<ResponseArticleDto> {
    try {
      let { image, ...data } = createArticleDto;
      image = JSON.parse(image as any);

      let article = await this.prisma.article.create({
        data: {
          ...data
        }
      });

      let articleImage = [] as ResponseImageDto[];

      //Percorre o array de imagens e salva no banco e as associa ao artigo
      if (imageFile) {
        for (let i = 0; i < imageFile.length; i++) {
          if (i == 0) {
            const imageUrl = await this.imageService.create(
              {
                id_origem: article.id,
                source: image.source,
                alt: image.alt,
                pos: 0
              },
              imageFile[0]
            );

            articleImage.push(imageUrl);
          } else {
            const imageUrl = await this.imageService.create(
              {
                id_origem: article.id,
                source: '',
                alt: '',
                pos: i
              },
              imageFile[i]
            );

            articleImage.push(imageUrl);
          }
        }
      }

      const returnArticle = {
        ...article,
        image: articleImage
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
          let image = await this.imageService.findByOrigin(article.id);

          return {
            ...article,
            image
          };
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

      let image = await this.imageService.findByOrigin(article!.id);

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
    imageFile?: Express.Multer.File
  ): Promise<Article> {
    try {
      let {image, ...data } = updateArticleDto;
      image = JSON.parse(image as any);

      const updateData : UpdateArticleDto={
            id: id,
            title: data.title,
            subTitle: data.subTitle,
            content: data.content,
            author: data.author,
            category: data.category
      }

      const article = this.prisma.article.update({
        where: { id },
        data: updateData
      });

      if (imageFile && image) {

        image.source = image.source ? image.source : '';

        const currentImage = await this.imageService.findByOrigin(id);
        await this.imageService.remove(currentImage[0].id);
        const imageUrl = await this.imageService.create(
          {
            id_origem: id,
            source: image!.source,
            alt: image!.alt,
            pos: currentImage.length
          },
          imageFile
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

  async remove(id: string) {
    try {
      await this.prisma.article.delete({
        where: { id }
      });

      this.imageService.removeAll(id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
