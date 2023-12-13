import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class ResponseUserDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  role: string;

  @Exclude()
  password: string;

  @IsString()
  image: string;

  @IsString()
  company: string;
}
