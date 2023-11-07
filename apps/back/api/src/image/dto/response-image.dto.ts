import { IsAlphanumeric, IsNotEmpty, IsNumber, IsUUID, IsUrl } from 'class-validator';

export class ResponseImageDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsAlphanumeric()
  source: string | null;

  @IsAlphanumeric()
  alt: string | null;

  @IsNumber()
  pos: number | null;
}
