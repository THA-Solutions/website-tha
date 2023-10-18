import { IsString, IsDate, IsUrl } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsUrl()
  imageUrl: string;

  @IsString()
  imageSrc: string;

  @IsString()
  title: string;

  @IsString()
  subTitle: string;

  @IsString()
  content: string;

  @IsString()
  author: string;

  @IsString()
  category: string;
}
