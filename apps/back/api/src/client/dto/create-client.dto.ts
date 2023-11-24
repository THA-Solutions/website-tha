import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
  MinLength
} from 'class-validator';

export class CreateClientDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @IsNotEmpty()
  password: string;

  image: {
    url: string | null;
    source: string | null;
    alt: string | null;
  };

  @IsString()
  role: string;
}
