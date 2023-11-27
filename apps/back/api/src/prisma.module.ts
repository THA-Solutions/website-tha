import { Module } from '@nestjs/common';
import PrismaService from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './image/image.module';
import { InverterModule } from './inverter/inverter.module';
import { TeamModule } from './team/team.module';
@Module({
  providers: [PrismaService, ConfigModule],
  exports: [PrismaService],
  imports: [ImageModule, InverterModule, TeamModule]
})
export class PrismaModule {}
