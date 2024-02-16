import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    return this.imageService.create(createImageDto, imageFile);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.imageService.findAll(id);
  }

  @Get('unique/:id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.imageService.update(id, updateImageDto, imageFile);
  }

  @Patch('origin/:id')
  @UseInterceptors(FileInterceptor('imageFile'))
  updateByOrigin(
    @Body() updateImageDto: UpdateImageDto,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    return this.imageService.updateByOrigin(updateImageDto, imageFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.delete(id);
  }

  @Delete('offset/:id')
  removeOffset(@Param('id') id: string, @Body() imageSet: UpdateImageDto[]) {
    return this.imageService.deleteOffSet(id, imageSet);
  }
}
