import { Module } from '@nestjs/common';
import PrismaService from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './image/image.module';
import { InverterModule } from './inverter/inverter.module';
import { TeamModule } from './team/team.module';
import { ReviewModule } from './review/review.module';
import { CompanyModule } from './company/company.module';
@Module({
  providers: [PrismaService, ConfigModule],
  exports: [PrismaService],
  imports: [
    ImageModule,
    InverterModule,
    TeamModule,
    ReviewModule,
    CompanyModule
  ]
})
export class PrismaModule {}
