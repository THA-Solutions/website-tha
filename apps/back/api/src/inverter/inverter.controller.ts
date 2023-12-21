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
import { InverterService } from './inverter.service';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('inverter')
export class InverterController {
  constructor(private readonly inverterService: InverterService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createInverterDto: CreateInverterDto,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    return this.inverterService.create(createInverterDto, imageFile);
  }

  @Get()
  findAll() {
    return this.inverterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inverterService.findOne(id);
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    return this.inverterService.findByTitle(title);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInverterDto: UpdateInverterDto
  ) {
    return this.inverterService.update(id, updateInverterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inverterService.remove(id);
  }
}
