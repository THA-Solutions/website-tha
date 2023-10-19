import {IsDateString, IsString, IsUrl } from 'class-validator';

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

  @IsUrl()
  imageUrl: string;
  
  @IsDateString()
  pubDate:Date;
}
