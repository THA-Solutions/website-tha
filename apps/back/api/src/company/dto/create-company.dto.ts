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

  @IsAlphanumeric()
  description: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  complement: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  cep: string;
}
