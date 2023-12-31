import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req
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
  @UseInterceptors(FileInterceptor('imageFile'))
  create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    try {
      return this.userService.create(createUserDto, imageFile);
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

  @Get('role/:role')
  findByRole(@Param('role') role: string) {
    try {
      return this.userService.findByRole(role);
    } catch (error) {
      throw Error(`Error in find user by role ${error}`);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    try {
      return this.userService.update(id, updateUserDto, imageFile);
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  @Post('recovery-password')
  recoveryPassword(@Body() body: { email: string }, @Req() req: Request) {
    try {
      return this.userService.forgotPassword(body.email, req);
    } catch (error) {
      throw Error(`Error in recovery password ${error}`);
    }
  }

  @Post('reset-password')
  resetPassword(@Body() body: { token: string; password: string }) {
    try {
      return this.userService.resetPassword(body.token, body.password);
    } catch (error) {
      throw Error(`Error in reset password ${error}`);
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
