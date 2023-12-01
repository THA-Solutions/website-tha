import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import PrismaService from '../prisma.service';
import { ResponseImageDto } from '../image/dto/response-image.dto';
import { ImageService } from '../image/image.service';

@Injectable()
export class TeamService {
  constructor(
    private readonly prisma: PrismaService,
    private imageService: ImageService
  ) {}

  async create(createTeamDto: CreateTeamDto, imageFile?: Express.Multer.File) {
    try {
      let { image, ...data } = createTeamDto;
      const teamMember = await this.prisma.team.create({
        data: data
      });

      let teamImage: ResponseImageDto = {} as ResponseImageDto;

      if (imageFile) {
        teamImage = await this.imageService.create(
          {
            id_origem: teamMember.id,
            source: image.source,
            alt: image.alt,
            pos: 0
          },
          imageFile
        );
      }

      const returnTeam = {
        id: teamMember.id,
        name: teamMember.name,
        role: teamMember.role,
        image: {
          url: teamImage ? teamImage.url : '',
          source: teamImage ? teamImage.source : '',
          alt: teamImage ? teamImage.alt : ''
        }
      };
      return returnTeam;
    } catch (error) {
      throw Error(`Error in create team member ${error}`);
    }
  }

  async findAll() {
    try {
      const teamMembers = await this.prisma.team.findMany();

      const returnMembers = await Promise.all(
        teamMembers.map(async (member) => {
          let image = await this.imageService.findByOrigin(member.id);

          return {
            ...member,
            imageUrl: image[0]?.url || ''
          };
        })
      );

      return returnMembers;
    } catch (error) {
      throw Error(`Error in find all team members ${error}`);
    }
  }

  async findOne(id: string) {
    try {
      const teamMember = await this.prisma.team.findUnique({
        where: { id }
      });

      const image = await this.imageService.findByOrigin(id);

      const returnMember = {
        name: teamMember!.name,
        role: teamMember!.role,
        imageUrl: image[0]?.url || ''
      };

      return returnMember;
    } catch (error) {
      throw Error(`Error in find team member ${error}`);
    }
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    try {
      let { image, ...data } = updateTeamDto;
      const teamMember = this.prisma.team.update({
        where: { id: id },
        data: data
      });
      return teamMember;
    } catch (error) {
      throw Error(`Error in update team member ${error}`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.team.delete({
        where: { id }
      });

      this.imageService.removeAll(id);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
