import { Injectable } from '@nestjs/common';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';
import { ResponseInverterDto } from './dto/response-inverter.dto';
import { CompanyService } from '../company/company.service';

@Injectable()
export class InverterService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImageService,
    private companyService: CompanyService
  ) {}

  async create(
    createInverterDto: CreateInverterDto,
    imageFile: Express.Multer.File
  ) {
    try {
      const { image, ...data } = createInverterDto;
      data.num_mppt = Number(data.num_mppt);

      const company = await this.companyService.findOne(data.id_company);
      if (company) {
        data.id_company = company.id!;
      } else {
        throw Error('Company not found');
      }
      const inverter = await this.prisma.inverter
        .create({
          data: {
            id_company: data.id_company,
            title: data.title,
            cc_voltage: data.cc_voltage,
            mppt_voltage_range: data.mppt_voltage_range,
            max_input_current: data.max_input_current,
            max_short_circuit_current_per_tracker:
              data.max_short_circuit_current_per_tracker,
            num_mppt: data.num_mppt,
            max_output_current: data.max_output_current,
            ca_nominal_power_range: data.ca_nominal_power_range,
            adjustable_power_factor: data.adjustable_power_factor,
            thdi: data.thdi,
            max_efficiency: data.max_efficiency,
            european_efficiency: data.european_efficiency,
            mppt_efficiency: data.mppt_efficiency,
            cc_reverse_polarity_protection: data.cc_reverse_polarity_protection,
            cc_switch: data.cc_switch,
            cc_surge_protection: data.cc_surge_protection,
            output_overcurrent_protection: data.output_overcurrent_protection,
            ac_overvoltage_protection: data.ac_overvoltage_protection,
            ground_fault_monitoring: data.ground_fault_monitoring,
            dimensions: data.dimensions,
            weight: data.weight,
            operating_temperature_range: data.operating_temperature_range,
            nighttime_power_consumption: data.nighttime_power_consumption,
            cooling: data.cooling,
            protection_degree: data.protection_degree,
            warranty: data.warranty
          }
        })
        .then(async (inverter) => {
          let inverterImage: ResponseImageDto = {} as ResponseImageDto;

          if (imageFile) {
            inverterImage = await this.imageService.create(
              {
                id_origem: inverter.id
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
