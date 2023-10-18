import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateClientDto {

  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @IsNotEmpty()
  password: string;

}
