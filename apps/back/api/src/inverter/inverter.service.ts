import { Injectable } from '@nestjs/common';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';
import { ResponseInverterDto } from './dto/response-inverter.dto';

@Injectable()
export class InverterService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImageService
  ) {}

  async create(
    createInverterDto: CreateInverterDto,
    imageFile: Express.Multer.File
  ) {
    try {
      const { image, ...data } = createInverterDto;

      data.num_mppt = Number(data.num_mppt);

      const inverter = await this.prisma.inverter
        .create({
          data: data
        })
        .then(async (inverter) => {
          let inverterImage: ResponseImageDto = {} as ResponseImageDto;

          if (imageFile) {
            inverterImage = await this.imageService.create(
              {
                id_origem: inverter.id,
                source: image.source,
                alt: image.alt,
                pos: 0
              },
              imageFile
            );
          }

          return {
            ...inverter,
            image: inverterImage
          };
        });

      return inverter;
    } catch (error) {
      throw new Error(`Error in create inverter ${error}`);
    }
  }

  async findAll(): Promise<ResponseInverterDto[]> {
    try {
      const inverters = await this.prisma.inverter.findMany();
      const returnInverters = await Promise.all(
        inverters.map(async (inverter) => {
          let [image] = await this.imageService.findByOrigin(inverter.id);

          return {
            ...inverter,
            image
          };
        })
      );

      return returnInverters;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      let inverter = await this.prisma.inverter
        .findUnique({
          where: {
            id: id
          }
        })
        .then(async (inverter) => {
          if (!inverter) {
            throw Error('Inverter not found');
          }

          let [image] = await this.imageService.findByOrigin(inverter.id);

          return {
            ...inverter,
            image: image ? image : null
          };
        });

      return inverter;
    } catch (error) {}
  }

  async findByTitle(title: string): Promise<ResponseInverterDto[]> {
    try {
      const inverters = await this.prisma.inverter.findMany({
        where: {
          title: {
            contains: title
          }
        },
        take: 100
      });

      const returnInverters = await Promise.all(
        inverters.map(async (inverter) => {
          let [image] = await this.imageService.findByOrigin(inverter.id);

          return {
            ...inverter,
            image
          };
        })
      );
      return returnInverters;
    } catch (error) {
      throw Error(error);
    }
  }

  async update(id: string, updateInverterDto: UpdateInverterDto) {
    try {
      const { image, ...data } = updateInverterDto;
      const inverter = await this.prisma.inverter.update({
        where: { id },
        data: data
      });

      return inverter;
    } catch (error) {}
  }

  async remove(id: string) {
    try {
      await this.prisma.inverter.delete({
        where: { id }
      });
      await this.imageService.deleteAll(id);
      return;
    } catch (error) {}
  }
}
