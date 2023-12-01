import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import PrismaService from '../prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { ImageService } from '../image/image.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService, PrismaService, ImageService],
  imports: [CloudinaryModule]
})
export class TeamModule {}
