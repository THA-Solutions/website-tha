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
      data.order = Number(data.order);
      const teamMember = await this.prisma.team
        .create({
          data: data
        })
        .then(async (teamMember) => {
          let teamImage: ResponseImageDto = {} as ResponseImageDto;

          if (imageFile) {
            teamImage = await this.imageService.create(
              {
                id_origem: teamMember.id,
                source: 'Team',
                alt: `MemberImage`,
                pos: 0
              },
              imageFile
            );
          }

          return {
            ...teamMember,
            image: teamImage ? teamImage.url : null
          };
        });

      return teamMember;
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
            image: image[0]?.url || null
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
      const teamMember = await this.prisma.team
        .findUnique({
          where: { id }
        })
        .then(async (teamMember) => {
          if (!teamMember) {
            throw Error('Team member not found');
          }

          const image = await this.imageService.findByOrigin(id);

          return {
            ...teamMember,
            image: image[0]?.url || null
          };
        });

      return teamMember;
    } catch (error) {
      throw Error(`Error in find team member ${error}`);
    }
  }

  async update(
    id: string,
    updateTeamDto: UpdateTeamDto,
    imageFile?: Express.Multer.File
  ) {
    try {
      let { image, ...data } = updateTeamDto;
      data.order = Number(data.order);
      const teamMember = await this.prisma.team
        .update({
          where: { id: id },
          data: data
        })
        .then(async (teamMember) => {
          if (!teamMember) {
            throw Error('Team member not found');
          }

          if (imageFile) {
            this.imageService.deleteAll(id);
            teamMember.image = await this.imageService
              .create(
                {
                  id_origem: teamMember.id,
                  source: 'Team',
                  alt: `MemberImage`,
                  pos: 0
                },
                imageFile
              )
              .then((image) => image.url);
          }
          return teamMember;
        });

      return teamMember;
    } catch (error) {
      throw Error(`Error in update team member ${error}`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.team
        .delete({
          where: { id }
        })
        .then(async (teamMember) => {
          this.imageService.deleteAll(id);
        });

      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
