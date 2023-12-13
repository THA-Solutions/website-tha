import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createBrandDto: CreateBrandDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.brandService.create(createBrandDto, imageFile);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get('title')
  findByTitle(@Body() title: string) {
    return this.brandService.findByTitle(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.brandService.update(id, updateBrandDto, imageFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
