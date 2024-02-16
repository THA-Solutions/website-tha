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
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Role } from '../auth/enums';
import { Roles } from '../auth/decorators/role.decorator';
import { Public } from '../auth/decorators/public.decorator';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile'))
  @Roles(Role.ADMIN)
  create(
    @Body() createTeamDto: CreateTeamDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.teamService.create(createTeamDto, imageFile);
  }

  @Get()
  @Public()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('imageFile'))
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
    @UploadedFile() imageFile?: Express.Multer.File
  ) {
    return this.teamService.update(id, updateTeamDto, imageFile);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.teamService.remove(id);
  }
}
