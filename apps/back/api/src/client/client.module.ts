import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import PrismaService from '../prisma.service';
import { ImageService } from '../image/image.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService, PrismaService, ImageService],
  exports: [ClientService],
  imports: [CloudinaryModule]
})
export class ClientModule {}
