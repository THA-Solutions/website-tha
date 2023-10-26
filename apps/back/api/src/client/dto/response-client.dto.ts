import { IsAlphanumeric, IsDateString, IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class ResponseClientDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  imageSrc?: string;
}
