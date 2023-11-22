import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
  MinLength
} from 'class-validator';

export class ResponseClientDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  image: {
    url: string;
    source: string | null;
    alt: string | null;
    pos: number | 0;
  };

  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @IsString()
  role: string;
}
