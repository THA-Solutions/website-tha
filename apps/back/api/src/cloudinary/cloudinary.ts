import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class Cloudinary {
  constructor(private configService: ConfigService) {
    this.configureCloudinary();
  }

  private configureCloudinary() {
    provide: this.configService.get<string>('CLOUDINARY'),
      cloudinary.config({
        cloud_name: this.configService.get<string>('CLOUDINARY_NAME'),
        api_key: this.configService.get<string>('CLOUDINARY_KEY'),
        api_secret: this.configService.get<string>('CLOUDINARY_SECRET'),
      });
  }

}
