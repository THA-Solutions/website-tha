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
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ResponseUserDto } from './dto/response-user.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw Error(`Error in create user ${error}`);
    }
  }

  @Get()
  findAll(): Promise<ResponseUserDto[]> {
    try {

      return this.userService.findAll();
    } catch (error) {
      throw Error(`Error in find all users ${error}`);
    }
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    try {
      return this.userService.findByEmail(email);
    } catch (error) {
      throw Error(`Error in find user by email ${error}`);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      throw Error(`Error in find user by id ${error}`);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  @Patch('image/:id')
  @UseInterceptors(FileInterceptor('imageFile'))
  updateImage(
    @Param('id') id: string,
    @UploadedFile() imageFile: Express.Multer.File
  ) {
    try {
      return this.userService.updateImage(id, imageFile);
    } catch (error) {
      throw Error(`Error in update user image ${error}`);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.userService.remove(id);
    } catch (error) {
      throw Error(`Error in remove user ${error}`);
    }
  } //Rota de remocao de usuario, apenas o admin pode remover um usuario
}
