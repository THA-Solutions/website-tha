import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';

@Injectable()
export class BrandService {
  constructor(
    private readonly prisma: PrismaService,
    private imageService: ImageService
    ){};

  async create(createBrandDto: CreateBrandDto, imageFile?: Express.Multer.File) {
    try {
      createBrandDto;

      const brand = await this.prisma.brand.create({
        data: {
          ...createBrandDto
        }
      });

      let brandImage = {} as ResponseImageDto;

      if (imageFile) {
        brandImage = await this.imageService.create(
          {
            id_origem: brand.id,
          },
          imageFile
        );
      }

      const returnBrand = {
        id: brand.id,
        trade_name: brand.trade_name,
        legal_name: brand.legal_name,
        cnpj: brand.cnpj,
        phone: brand.phone,
        email: brand.email,
        description: brand.description,
        image: brandImage ? brandImage.url : ''
      };

      return returnBrand;
    } catch (error) {
      throw Error(`Error in create brand ${error}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.brand.findMany({});
    } catch (error) {
      throw Error(`Error in find all brands ${error}`);
    }
  }

  async findOne(id: string) {
    return await this.prisma.brand.findUnique({where: {id: id}});
  }

  async findByTitle(title: string) {
    try {
      return await this.prisma.brand.findFirst({ where: { trade_name: title } });
    } catch (error) {
      throw Error(`Error in find brand by title ${error}`);  
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto, imageFile?: Express.Multer.File) {
    try {
      if (imageFile) {
        this.imageService.deleteAll(id);
        const brandImage = await this.imageService.create(
          {
            id_origem: id,
          },
          imageFile
        );
      }
      const updatedBrand = await this.prisma.brand.update({
        where: {
          id: id
        },
        data: {
          ...updateBrandDto
        }
      });
      return updatedBrand;
    } catch (error) {
      throw Error(`Error in update brand ${error}`);  
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.brand.delete({where: {id: id}});
    } catch (error) {
      throw Error(`Error in delete brand ${error}`);  
    }
  }
}
