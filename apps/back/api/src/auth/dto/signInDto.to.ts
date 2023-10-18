import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class signInDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @IsNotEmpty()
  password: string;
}