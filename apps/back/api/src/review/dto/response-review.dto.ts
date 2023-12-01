import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseReviewDto {
  @IsString()
  @IsNotEmpty()
  user: string;
  @IsNumber()
  value: number;
  @IsString()
  comment: string;
  date: Date | string;
}
