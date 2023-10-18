import { Module } from '@nestjs/common';
import PrismaService from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [PrismaService, ConfigModule],
  exports: [PrismaService],
})
export class PrismaModule { }
