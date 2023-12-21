import { IsDateString, IsString } from 'class-validator';

export class ResponseArticleDto {
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

  image: {
    url: string;
    source: string | null;
    alt: string | null;
  }[];

  @IsDateString()
  pubDate: Date;
}
