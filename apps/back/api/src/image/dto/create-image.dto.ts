import {
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsUrl
} from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsUUID()
  id_origem: string;

  @IsAlphanumeric()
  source?: string | null;

  @IsAlphanumeric()
  alt?: string | null;

  @IsNumber()
  pos?: number | 0;

  @IsString()
  url?: string;
}
