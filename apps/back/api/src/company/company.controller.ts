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
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../auth/enums';
import { Public } from '../auth/decorators/public.decorator';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.companyService.create(createCompanyDto, imageFile);
  }

  @Get()
  @Public()
  findAll() {
    return this.companyService.findAll();
  }

  @Get('/title/:title')
  @Public()
  findByTitle(@Body() title: string) {
    return this.companyService.findByTitle(title);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  @Roles(Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.companyService.update(id, updateCompanyDto, imageFile);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
