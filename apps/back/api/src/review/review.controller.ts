import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Role } from '../auth/enums';
import { Roles } from '../auth/decorators/role.decorator';
import { Public } from '../auth/decorators/public.decorator';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @Roles(Role.CUSTOMER, Role.SUPPLIER, Role.INTEGRATOR)
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  @Public()
  findAll(@Param('id_inverter') id_inverter: string) {
    return this.reviewService.findAll(id_inverter);
  }

  @Get(':id')
  @Public()
  findOne(
    @Param('id_user') id_user: string,
    @Param('id_inverter') id_inverter: string
  ) {
    return this.reviewService.findOne(id_user, id_inverter);
  }

  @Patch(':id')
  @Roles(Role.CUSTOMER, Role.SUPPLIER, Role.INTEGRATOR)
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @Roles(Role.CUSTOMER, Role.SUPPLIER, Role.INTEGRATOR)
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
