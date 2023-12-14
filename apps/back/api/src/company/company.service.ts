import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';

@Injectable()
export class CompanyService {
  constructor(
    private readonly prisma: PrismaService,
    private imageService: ImageService
  ) {}

  async create(
    createCompanyDto: CreateCompanyDto,
    imageFile?: Express.Multer.File
  ) {
    try {
      const company = await this.prisma.company.create({
        data: {
          ...createCompanyDto
        }
      }).then(async(company) => {
        let companyImage = {} as ResponseImageDto;
        if (imageFile) {
          companyImage = await this.imageService.create(
            {
              id_origem: company.id
            },
            imageFile
          );
        }

        return {
          ...company,
          image: companyImage ? companyImage.url : ''
        }
      });

      return company;
    } catch (error) {
      throw Error(`Error in create company ${error}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.company.findMany({});
    } catch (error) {
      throw Error(`Error in find all company ${error}`);
    }
  }

  async findOne(id: string) {
    return await this.prisma.company.findUnique({ where: { id: id } });
  }

  async findByTitle(title: string) {
    try {
      return await this.prisma.company.findFirst({
        where: { trade_name: title }
      });
    } catch (error) {
      throw Error(`Error in find company by title ${error}`);
    }
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
    imageFile?: Express.Multer.File
  ) {
    try {
      if (imageFile) {
        this.imageService.deleteAll(id);
        const companyImage = await this.imageService.create(
          {
            id_origem: id
          },
          imageFile
        );
      }
      const updatedCompany = await this.prisma.company.update({
        where: {
          id: id
        },
        data: {
          ...updateCompanyDto
        }
      });
      return updatedCompany;
    } catch (error) {
      throw Error(`Error in update company ${error}`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.company.delete({ where: { id: id } });
    } catch (error) {
      throw Error(`Error in delete company ${error}`);
    }
  }
}
