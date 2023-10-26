import { PartialType } from '@nestjs/mapped-types';
import { CreateInverterDto } from './create-inverter.dto';

export class UpdateInverterDto extends PartialType(CreateInverterDto) {}
