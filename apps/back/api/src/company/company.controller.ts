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
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.companyService.create(createCompanyDto, imageFile);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get('title')
  findByTitle(@Body() title: string) {
    return this.companyService.findByTitle(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.companyService.update(id, updateCompanyDto, imageFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
