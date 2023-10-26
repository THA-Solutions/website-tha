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
    image: Express.Multer.File
  ) {
    try {
      const { imageSrc, ...data } = createInverterDto;

      const inverter = await this.prisma.inverter.create({
        data: data
      });

      const inverterImage: ResponseImageDto = {} as ResponseImageDto;

      if (image) {
        const inverterImage = this.imageService.create(
          { id_origem: inverter.id, imageSrc },
          image
        );
      }

      const returnInverter = {
        ...inverter,
        image: inverterImage
      };

      return returnInverter;
    } catch (error) {}
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
      let inverter = await this.prisma.inverter.findUnique({
        where: {
          id: id
        }
      });

      let [image] = await this.imageService.findByOrigin(id);

      const returnInverter = {
        ...inverter!,
        image
      }!;

      return returnInverter;
    } catch (error) {}
  }

  update(id: string, updateInverterDto: UpdateInverterDto) {
    try {
      const { imageSrc, ...data } = updateInverterDto;
      const inverter = this.prisma.inverter.update({
        where: { id },
        data: data
      });

      return inverter;
    } catch (error) {}
  }

  remove(id: string) {
    try {
      this.prisma.inverter.delete({
        where: { id }
      });
      return;
    } catch (error) {}
  }
}
