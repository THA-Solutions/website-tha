import { Exclude } from "class-transformer";
import { IsAlphanumeric, IsEmail, IsString } from "class-validator";

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
  permissions: string;

  @Exclude()
  password: string;

  image: {
    url: string | null;
    source: string | null;
    alt: string | null;
  };
}