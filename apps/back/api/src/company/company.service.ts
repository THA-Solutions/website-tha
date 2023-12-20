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
      const company = await this.prisma.company
        .create({
          data: {
            ...createCompanyDto
          }
        })
        .then(async (company) => {
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
            image: companyImage ? companyImage.url : null
          };
        });

      return company;
    } catch (error) {
      throw Error(`Error in create company ${error}`);
    }
  }

  async findAll() {
    try {
      const companies = await this.prisma.company.findMany({});

      const companiesWithImage = await Promise.all(
        companies.map(async (company) => {
          const image = await this.imageService.findByOrigin(company.id);

          return {
            ...company,
            image: image ? image[0].url : null
          };
        })
      );

      return companiesWithImage;
    } catch (error) {
      throw Error(`Error in find all company ${error}`);
    }
  }

  async findOne(id: string) {
    return await this.prisma.company
      .findFirst({ where: { id: id } })
      .then(async (company) => {
        const image = await this.imageService.findByOrigin(company!.id);
        return {
          ...company,
          image: image ? image[0].url : null
        };
      });
  }

  async findByTitle(title: string) {
    try {
      return await this.prisma.company
        .findFirst({
          where: { legal_name: title }
        })
        .then(async (company) => {
          const image = await this.imageService.findByOrigin(company!.id);
          return {
            ...company,
            image: image ? image[0].url : null
          };
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
