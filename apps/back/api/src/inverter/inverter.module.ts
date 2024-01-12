import { Module } from '@nestjs/common';
import { InverterService } from './inverter.service';
import { InverterController } from './inverter.controller';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { CompanyModule } from '../company/company.module';

@Module({
  controllers: [InverterController],
  providers: [InverterService, PrismaService, ImageService],
  imports: [CloudinaryModule, CompanyModule]
})
export class InverterModule {}
