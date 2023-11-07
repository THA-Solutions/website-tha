import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import PrismaService from '../prisma.service';
import CloudinaryService from '../cloudinary/cloudinary.service';
import { ResponseImageDto } from './dto/response-image.dto';

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
          pos: createImageDto.pos
        }
      });

      return imageCreated;
    } catch (error) {
      throw Error(`Error in create image ${error}`);
    }
  }

  async findAll() {
    try {
      const images = await this.prisma.image.findMany();

      return images;
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
      const images = await this.prisma.image.findMany({
        select: {
          id: true,
          url: true,
          source: true,
          alt: true,
          pos: true
        },
        where: { id_origem: id }
      });

      return images;
    } catch (error) {
      throw Error(`Error in find all images ${error}`);
    }
  }

  async update(id: string, image: Express.Multer.File) {
    try {
      const url = await this.cloudinary.uploadImage(image);
      const updatedImage = await this.prisma.image.update({
        where: { id },
        data: {
          url: url
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

  async remove(id: string) {
    try {
      return await this.prisma.image.delete({ where: { id } });
    } catch (error) {
      throw Error(`Error in remove image ${error}`);
    }
  }

  async removeAll(id: string) {
    try {
      return await this.prisma.image.deleteMany({ where: { id_origem: id } });
    } catch (error) {
      throw Error(`Error in remove all images ${error}`);
    }
  }
}
