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
    try {
      const user = await this.userService
        .findOne(createReviewDto.id_user)
        .then(async (user) => {
          if (
            !user ||
            (await this.inverterService.findOne(createReviewDto.id_inverter))
          ) {
            throw new Error('User or Inverter not found');
          }
  
          const validateReview = await this.findOne(
            createReviewDto.id_user,
            createReviewDto.id_inverter
          );
  
          if (validateReview) {
            return validateReview;
          }
  
          return user;
        });
  
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
    } catch (error) {
      throw Error(`Error in create review ${error}`);
    }
  }

  async findAll(id_inverter: string) {
    try {
      return await this.prisma.review.findMany({
        where: { id_inverter: id_inverter }
      });
    } catch (error) {
      throw Error(`Error in find all review ${error}`);  
    }
  }

  async findOne(id_user: string, id_inverter: string) {
    try {
      return await this.prisma.review.findMany({
        where: {
          id_user: id_user,
          id_inverter: id_inverter
        }
      });
    } catch (error) {
      throw Error(`Error in find review ${error}`);  
    }
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    try {
      return await this.prisma.review.update({
        where: { id: id },
        data: updateReviewDto
      });
    } catch (error) {
      throw Error(`Error in update review ${error}`);  
    }
  }

  remove(id: string) {
    try {
      return this.prisma.review.delete({
        where: { id: id }
      });
    } catch (error) {
      throw Error(`Error in remove review ${error}`);  
    }
  }
}
