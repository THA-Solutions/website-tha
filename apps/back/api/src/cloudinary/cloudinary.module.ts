import { Module } from '@nestjs/common';
import { Cloudinary } from './cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';

@Module({
  providers: [Cloudinary, CloudinaryService],
  exports: [Cloudinary, CloudinaryService],
  controllers: [CloudinaryController],
})
export class CloudinaryModule { }
