import {IsDateString, IsString } from 'class-validator';

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

  image:{
    url: string;
    imageSrc: string | null;
  }[];

  @IsDateString()
  pubDate:Date;
}
