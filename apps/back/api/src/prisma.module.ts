import { Module } from '@nestjs/common';
import PrismaService from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './image/image.module';

@Module({
  providers: [PrismaService, ConfigModule],
  exports: [PrismaService],
  imports: [ImageModule],
})
export class PrismaModule { }
