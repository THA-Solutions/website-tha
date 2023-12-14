import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  legal_name: string;
  trade_name: string;
  @IsNotEmpty()
  cnpj: string;
  @IsString()
  address: string;
  @IsPhoneNumber('BR')
  phone: string;
  @IsAlphanumeric()
  description: string;
}
