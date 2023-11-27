import { IsString } from "class-validator";

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  image: {
    url: string | null;
    source: string | null;
    alt: string | null;
  };

  order: number;
  @IsString()
  linkedin: string;
  @IsString()
  instagram: string;
  @IsString()
  description: string;
}
