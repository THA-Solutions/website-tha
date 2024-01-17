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
  constructor(private readonly inverterService: InverterService) { }

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createInverterDto: CreateInverterDto,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    try {
      return this.inverterService.create(createInverterDto, imageFile);
    } catch (error) {
      throw Error(`Error in create inverter ${error}`);
    }
  }

  @Get()
  findAll() {
    try {
      return this.inverterService.findAll();
    } catch (error) {
      throw Error(`Error in find all inverters ${error}`);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.inverterService.findOne(id);
    } catch (error) {
      throw Error(`Error in find inverter by id ${error}`);
    }
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    try {
      return this.inverterService.findByTitle(title);
    } catch (error) {
      throw Error(`Error in find inverter by title ${error}`);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateInverterDto: UpdateInverterDto,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    try {
      return this.inverterService.update(id, updateInverterDto, imageFile);
    } catch (error) {
      throw Error(`Error in update inverter ${error}`);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.inverterService.remove(id);
    } catch (error) {
      throw Error(`Error in delete inverter ${error}`);
    }
  }
}
