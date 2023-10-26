import { IsString } from 'class-validator';

export class CreateArticleDto {

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
  
  image:{
    url: string;
    source: string | null;
    alt: string | null;
  }[];

}
