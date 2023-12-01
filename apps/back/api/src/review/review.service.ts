import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import PrismaService from '../prisma.service';
import { UserService } from '../user/user.service';
import { InverterService } from '../inverter/inverter.service';
import { ResponseReviewDto } from './dto/response-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private inverterService: InverterService
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const user = await this.userService.findOne(createReviewDto.id_user);
    if (!user || !this.inverterService.findOne(createReviewDto.id_inverter)) {
      throw new Error('User or Inverter not found');
    }

    const validateReview = await this.findOne(
      createReviewDto.id_user,
      createReviewDto.id_inverter
    );

    if (validateReview) {
      return validateReview;
    }

    const review = await this.prisma.review.create({
      data: createReviewDto
    });

    const responseReview: ResponseReviewDto = {
      user: user.firstName + ' ' + user.lastName,
      value: review!.value!,
      comment: review.comment!,
      date: review.date!
    };

    return responseReview;
  }

  async findAll(id_inverter: string) {
    const reviews = await this.prisma.review.findMany({
      where: { id_inverter: id_inverter }
    });
    return reviews;
  }

  async findOne(id_user: string, id_inverter: string) {
    const review = await this.prisma.review.findMany({
      where: {
        id_user: id_user,
        id_inverter: id_inverter
      }
    });

    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const review = await this.prisma.review.update({
      where: { id: id },
      data: updateReviewDto
    });
    return review;
  }

  remove(id: string) {
    return this.prisma.review.delete({
      where: { id: id }
    });
  }
}
