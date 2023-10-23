import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.imageService.create(createImageDto, image);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @UploadedFile() image: Express.Multer.File) {
    return this.imageService.update(id, image);
  }

  @Patch('origin/:id')
  @UseInterceptors(FileInterceptor('image'))
  updateByOrigin(
    @Body() updateImageDto: UpdateImageDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.imageService.updateByOrigin(updateImageDto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
