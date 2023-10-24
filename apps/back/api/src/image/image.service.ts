import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import PrismaService from '../prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
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
    const url = await this.cloudinary.uploadImage(image);

    const { id, ...imageCreated } = await this.prisma.image.create({
      data: {
        url: url,
        imageSrc: createImageDto.imageSrc,
        id_origem: createImageDto.id_origem
      }
    });

    return imageCreated;
  }

  async findAll() {
    const images = await this.prisma.image.findMany();

    return images;
  }

  async findOne(id: string) {
    return await this.prisma.image.findUnique({ where: { id: id } });
  }

  async findByOrigin(id: string) {
    const images = await this.prisma.image.findMany({
      select: {
        id: true,
        url: true,
        imageSrc: true
      },
      where: { id_origem: id }
    });

    return images;
  }

  async update(id: string, image: Express.Multer.File) {
    const url = await this.cloudinary.uploadImage(image);  
    const updatedImage = await this.prisma.image.update({
      where: { id },
      data: {
        url: url
      }
    });
    return updatedImage;
  }

  async updateByOrigin(updateImageDto: any, image: Express.Multer.File) {
    const createdImage = await this.create(updateImageDto, image);
    const updatedImage = await this.prisma.image.update({
      where: { id: updateImageDto.id },
      data: {
        url: createdImage.url
      }
    });
    return updatedImage;
  }

  remove(id: string) {
    return this.prisma.image.delete({ where: { id } });
  }

  removeAll(id: string) {
    return this.prisma.image.deleteMany({ where: { id_origem: id } });
  }
}
