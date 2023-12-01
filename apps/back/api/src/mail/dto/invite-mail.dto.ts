import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class inviteMailDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsAlphanumeric()
  company: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  message: string;
}
