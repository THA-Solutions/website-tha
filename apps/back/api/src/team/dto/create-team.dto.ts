import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  image: string;

  order: number;
  @IsString()
  linkedin: string;
  @IsString()
  instagram: string;
  @IsString()
  description: string;
}
