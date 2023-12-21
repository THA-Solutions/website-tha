import { Module } from '@nestjs/common';
import CloudinaryService from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [CloudinaryService, ConfigService],
  exports: [CloudinaryService],
  controllers: [CloudinaryController]
})
export class CloudinaryModule {}
