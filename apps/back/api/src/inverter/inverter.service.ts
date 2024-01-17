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
  ) { }

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
          const company = await this.companyService.findOne(
            inverter.id_company
          );
          return {
            ...inverter,
            company: company ? company.legal_name : null,
            image
          };
        })
      );

      return returnInverters;
    } catch (error) {
      throw new Error(`Error in find all inverters ${error}`);
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
          const company = await this.companyService.findOne(
            inverter.id_company
          );
          return {
            ...inverter,
            company: company ? company.legal_name : null,
            image: image ? image : null
          };
        });
      return inverter;
    } catch (error) {
      throw new Error(`Error in find inverter by id ${error}`);
    }
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
          const company = await this.companyService.findOne(
            inverter.id_company
          );
          return {
            ...inverter,
            company: company ? company.legal_name : null,
            image
          };
        })
      );
      return returnInverters;
    } catch (error) {
      throw new Error(`Error in find inverter by title ${error}`);
    }
  }

  async update(
    id: string,
    updateInverterDto: UpdateInverterDto,
    image?: Express.Multer.File
  ) {
    const responseInverter = await new ResponseInverterDto();
    try {
      const { ...data } = updateInverterDto;

      if (image) {
        let imageInDB = await this.imageService.findByOrigin(id);
        if (imageInDB.length > 0) {
          await this.imageService
            .update(imageInDB[0].id, { id_origem: id }, image)
            .then((image) => {
              if (!image) {
                throw Error('Image not updated');
              }
              responseInverter.image = image;
            });
        } else {
          await this.imageService
            .create({ id_origem: id }, image)
            .then((image) => {
              if (!image) {
                throw Error('Image not updated');
              }
              responseInverter.image = image;
            });
        }
      }
      await this.prisma.inverter
        .update({
          where: { id },
          data: {
            id_company: data.id_company,
            title: data.title,
            cc_voltage: data.cc_voltage,
            mppt_voltage_range: data.mppt_voltage_range,
            max_input_current: data.max_input_current,
            max_short_circuit_current_per_tracker:
              data.max_short_circuit_current_per_tracker,
            num_mppt: +data.num_mppt!,
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
          responseInverter.ac_overvoltage_protection =
            inverter.ac_overvoltage_protection;
          responseInverter.adjustable_power_factor =
            inverter.adjustable_power_factor;
          responseInverter.cooling = inverter.cooling;
          responseInverter.cc_reverse_polarity_protection =
            inverter.cc_reverse_polarity_protection;
          responseInverter.cc_surge_protection = inverter.cc_surge_protection;
          responseInverter.cc_switch = inverter.cc_switch;
          responseInverter.cc_voltage = inverter.cc_voltage;
          responseInverter.dimensions = inverter.dimensions;
          responseInverter.european_efficiency = inverter.european_efficiency;
          responseInverter.ground_fault_monitoring =
            inverter.ground_fault_monitoring;
          responseInverter.id_company = inverter.id_company;
          responseInverter.max_efficiency = inverter.max_efficiency;
          responseInverter.max_input_current = inverter.max_input_current;
          responseInverter.max_output_current = inverter.max_output_current;
          responseInverter.max_short_circuit_current_per_tracker =
            inverter.max_short_circuit_current_per_tracker;
          responseInverter.mppt_efficiency = inverter.mppt_efficiency;
          responseInverter.mppt_voltage_range = inverter.mppt_voltage_range;
          responseInverter.nighttime_power_consumption =
            inverter.nighttime_power_consumption;
          responseInverter.num_mppt = inverter.num_mppt;
          responseInverter.operating_temperature_range =
            inverter.operating_temperature_range;
          responseInverter.output_overcurrent_protection =
            inverter.output_overcurrent_protection;
          responseInverter.protection_degree = inverter.protection_degree;
          responseInverter.thdi = inverter.thdi;
          responseInverter.title = inverter.title;
          responseInverter.warranty = inverter.warranty;
          responseInverter.weight = inverter.weight;
          return;
        });

      return responseInverter;
    } catch (error) {
      throw new Error(`Error in update inverter ${error}`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.inverter.delete({
        where: { id }
      });
      await this.imageService.deleteAll(id);
      return;
    } catch (error) {
      throw new Error(`Error in delete inverter ${error}`);
    }
  }
}
