import { IsAlphanumeric, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsUUID()
  id_origem: string;

  @IsAlphanumeric()
  source: string | null;

  @IsAlphanumeric()
  alt: string | null;
}
