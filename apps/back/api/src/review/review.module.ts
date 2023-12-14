import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import PrismaService from '../prisma.service';
import { UserService } from '../user/user.service';
import { InverterService } from '../inverter/inverter.service';
import { ImageService } from '../image/image.service';
import CloudinaryService from '../cloudinary/cloudinary.service';
import { CompanyService } from '../company/company.service';
@Module({
  controllers: [ReviewController],
  providers: [
    ReviewService,
    PrismaService,
    UserService,
    InverterService,
    ImageService,
    CloudinaryService,
    CompanyService
  ]
})
export class ReviewModule {}
