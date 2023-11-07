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
    url: string| null;
    source: string | null;
    alt: string | null;
    pos: number | 0;	
  };

}
