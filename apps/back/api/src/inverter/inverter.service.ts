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

      const inverter = await this.prisma.inverter.create({
        data: data
      });

      let inverterImage: ResponseImageDto = {} as ResponseImageDto;

      if (imageFile) {
        inverterImage = await this.imageService.create(
          { id_origem: inverter.id, source: image.source, alt: image.alt ,pos:0},
          imageFile
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
      await this.imageService.removeAll(id);
      return;
    } catch (error) {}
  }
}