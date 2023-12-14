import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import PrismaService from '../prisma.service';
import CloudinaryService from '../cloudinary/cloudinary.service';
import { ResponseImageDto } from './dto/response-image.dto';
import { UpdateCompanyDto } from '../company/dto/update-company.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService
  ) {}

  async create(
    createImageDto: CreateImageDto,
    image: Express.Multer.File
  ): Promise<ResponseImageDto> {
    try {
      const url = await this.cloudinary.uploadImage(image);

      const { id, ...imageCreated } = await this.prisma.image.create({
        data: {
          url: url,
          source: createImageDto.source,
          alt: createImageDto.alt,
          id_origem: createImageDto.id_origem,
          pos: Number(createImageDto.pos)
        }
      });

      return imageCreated;
    } catch (error) {
      throw Error(`Error in create image ${error}`);
    }
  }

  async createByUrl(createImageDto: CreateImageDto): Promise<ResponseImageDto> {
    try {
      //Cria uma nova imagem em banco baseando-se no URL original
      const { id, ...imageCreated } = await this.prisma.image.create({
        data: {
          url: createImageDto.url!,
          source: createImageDto.source || '',
          alt: createImageDto.alt || '',
          id_origem: createImageDto.id_origem,
          pos: Number(createImageDto.pos)
        }
      });

      return imageCreated;
    } catch (error) {
      throw Error(`Error in create image ${error}`);
    }
  }

  async findAll(id: string) {
    try {
      //Busca todas as imagens do requisitante
      return await this.prisma.image.findMany({
        where: { id_origem: id }
      });
    } catch (error) {
      throw Error(`Error in find all images ${error}`);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.image.findUnique({ where: { id: id } });
    } catch (error) {
      throw Error(`Error in find one image ${error}`);
    }
  }

  async findByOrigin(id: string) {
    try {
      return await this.prisma.image.findMany({
        select: {
          id: true,
          url: true,
          source: true,
          alt: true,
          pos: true,
          id_origem: true
        },
        where: { id_origem: id }
      });
    } catch (error) {
      throw Error(`Error in find all images ${error}`);
    }
  }

  async findByAtribute(param: string, value: any) {
    try {
      return await this.prisma.image.findMany({
        where: { [param]: value }
      });
    } catch (error) {
      throw Error(`Error in find all images ${error}`);
    }
  }

  async update(
    id: string,
    updateImageDto: UpdateImageDto,
    image?: Express.Multer.File
  ) {
    try {
      if (image) {
        const url = await this.cloudinary.uploadImage(image);
        updateImageDto.url = url;
      }

      const updatedImage = await this.prisma.image.update({
        where: { id },
        data: {
          ...updateImageDto
        }
      });

      return updatedImage;
    } catch (error) {
      throw Error(`Error in update image ${error}`);
    }
  }

  async updateByOrigin(updateImageDto: any, image: Express.Multer.File) {
    try {
      const createdImage = await this.create(updateImageDto, image);

      const updatedImage = await this.prisma.image.update({
        where: { id: updateImageDto.id },
        data: {
          url: createdImage.url
        }
      });

      return updatedImage;
    } catch (error) {
      throw Error(`Error in update image ${error}`);
    }
  }

  async delete(id: string) {
    try {
      //Remove a imagem do cloudinary
      this.findOne(id).then(async (image) => {
        //Extrai o id publico da imagem
        let id = image!.url.match(/\images\/[^/.]+(?=\.)/)![0];
        await this.cloudinary.removeImage(id);
      });
      return await this.prisma.image.delete({ where: { id } });
    } catch (error) {
      throw Error(`Error in remove image ${error}`);
    }
  }

  async deleteOffSet(images: any[]) {
    try {
      const ids = await this.prisma.image.findMany({
        select: {
          id: true
        },
        where: {
          url: {
            notIn: images
          }
        }
      });

      for (const id of ids) {
        await this.delete(id.id);
      }
    } catch (error) {
      throw Error(`Error in remove image ${error}`);
    }
  }

  async deleteAll(id: string) {
    try {
      //Busca todas as imagens do requisitante
      const oldImages = await this.findByOrigin(id);

      if (oldImages.length > 0) {
        for (const image of oldImages) {
          //Extrai o id publico da imagem
          let id = image.url.match(/\images\/[^/.]+(?=\.)/)![0];

          await this.cloudinary.removeImage(id);
        }
      }

      await this.prisma.image.deleteMany({
        where: { id_origem: id }
      });

      return;
    } catch (error) {
      throw Error(`Error in remove all images ${error}`);
    }
  }
}
