import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PrismaService from '../prisma.service';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { ResponseUserDto } from './dto/response-user.dto';
import { ImageService } from '../image/image.service';
import { CompanyService } from '../company/company.service';
import { MailService } from '../mail/mail.service';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
    private companyService: CompanyService,
    private imageService: ImageService,
    private mailService: MailService
  ) {}

  async create(
    createUserDto: CreateUserDto,
    imageFile?: Express.Multer.File
  ): Promise<ResponseUserDto> {
    try {
      const user = await this.prisma.user
        .findFirst({
          where: { email: createUserDto.email }
        })
        .then(async (user) => {
          if (user) {
            throw Error('User already exists');
          }

          if (createUserDto.company || createUserDto.role === 'customer') {
            await this.companyService
              .findByTitle(createUserDto.company!)
              .then((company) => {
                if (!company) {
                  throw Error('Company not found');
                }
                createUserDto.company = company.id;
                return company;
              });
          }

          createUserDto.password = this.crypter(createUserDto.password);

          createUserDto.role && createUserDto.role != 'admin'
            ? createUserDto.role
            : 'user';

          const createdUser = await this.prisma.user
            .create({
              data: createUserDto
            })
            .then(async (user) => {
              if (!user) {
                throw Error('User not found');
              }
              if (imageFile) {
                await this.imageService.create(
                  {
                    id_origem: user.id
                  },
                  imageFile
                );
              }

              return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                company: createUserDto.company ? createUserDto.company : null
              };
            });
          return createdUser as ResponseUserDto;
        });

      return user as ResponseUserDto;
    } catch (error) {
      throw Error(`Error in create user ${error}`);
    }
  }

  async findAll(): Promise<ResponseUserDto[]> {
    try {
      const users = await this.prisma.user.findMany();

      const returnUser = await Promise.all(
        //Percorre o array de usuários e retorna um array de objetos com os dados do usuário e a url da imagem
        users.map(async (user) => {
          let image = await this.prisma.image.findFirst({
            select: {
              url: true
            },
            where: {
              id_origem: user.id
            }
          });

          if (user.company) {
            await this.companyService.findOne(user.company).then((company) => {
              if (!company) {
                user.company = null;
              }
              user.company = company.trade_name
                ? company.trade_name
                : company.legal_name!;
            });
          }

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            image: image ? image.url : null,
            company: user.company ? user.company : null
          };
        })
      );

      return returnUser as ResponseUserDto[];
    } catch (error) {
      throw Error(`Error in find all users ${error}`);
    }
  }

  async findByRole(role: string): Promise<ResponseUserDto[]> {
    const users = await this.prisma.user.findMany({
      where: { role }
    });

    const returnUser = await Promise.all(
      //Percorre o array de usuários e retorna um array de objetos com os dados do usuário e a url da imagem
      users.map(async (user) => {
        let image = await this.prisma.image.findFirst({
          select: {
            url: true
          },
          where: {
            id_origem: user.id
          }
        });
        if (user.company) {
          await this.companyService.findOne(user.company).then((company) => {
            if (!company) {
              user.company = null;
            }
            user.company = company.trade_name
              ? company.trade_name
              : company.legal_name!;
          });
        }
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          image: image ? image.url : null,
          company: user.company
        };
      })
    );

    return returnUser as ResponseUserDto[];
  }

  async findOne(id: string): Promise<any> {
    try {
      let user = await this.prisma.user
        .findUnique({
          where: { id }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }

          const image = await this.prisma.image.findFirst({
            select: {
              url: true,
              source: true,
              alt: true
            },
            where: {
              id_origem: id
            }
          });

          if (user.company) {
            await this.companyService.findOne(user.company).then((company) => {
              if (!company) {
                user.company = null;
              }
              user.company = company.legal_name;
            });
          }

          return {
            id: user!.id,
            firstName: user!.firstName,
            lastName: user!.lastName,
            email: user!.email,
            image: image ? image.url : null,
            company: user.company
          };
        });

      return user;
    } catch (error) {
      throw Error(`Error in find user by id ${error}`);
    }
  }

  async findByEmail(email: string): Promise<ResponseUserDto> {
    try {
      //Busca o usuário pelo email e sua respectiva imagem e retorna um objeto com os dados do usuário e a url da imagem
      const user = await this.prisma.user
        .findFirst({
          where: {
            email: email
          }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }
          const image = await this.prisma.image.findFirst({
            where: {
              id_origem: user.id
            }
          });

          if (user.company) {
            await this.companyService.findOne(user.company).then((company) => {
              if (!company) {
                user.company = null;
              }

              user.company = company.trade_name
                ? company.trade_name
                : company.legal_name!;
            });
          }

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: image ? image.url : null,
            password: user.password,
            role: user.role,
            company: user.company
          };
        });

      return user as ResponseUserDto;
    } catch (error) {
      throw Error(`Error in find user by email ${error}`);
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    image?: Express.Multer.File
  ) {
    const responseUser = new ResponseUserDto();
    try {
      const { imageFile, ...data } = updateUserDto;

      if (image) {
        let imageInDB = await this.imageService.findByOrigin(id);
        if (imageInDB.length > 0) {
          await this.imageService
            .update(imageInDB[0].id, { id_origem: id }, image)
            .then((image) => {
              if (!image) {
                throw Error('Image not updated');
              }
              responseUser.image = image.url;
            });
        } else {
          await this.imageService
            .create({ id_origem: id }, image)
            .then((image) => {
              if (!image) {
                throw Error('Image not updated');
              }
              responseUser.image = image.url;
            });
        }
      }

      await this.prisma.user
        .update({
          where: { id },
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company
          }
        })
        .then(async (user) => {
          responseUser.id = user.id!;
          responseUser.email = user.email!;
          responseUser.firstName = user.firstName!;
          responseUser.lastName = user.lastName!;
          responseUser.company = user.company!;
          return;
        });

      return responseUser;
    } catch (error) {
      throw Error(`Error in update user ${error}`);
    }
  }

  async forgotPassword(email: string, request: any) {
    const user = await this.findByEmail(email);

    if (!user) {
      throw Error('User not found');
    }

    const resetToken = await this.createResetToken(user);

    const resetUrl = `http://localhost:4200/recuperar-senha/${resetToken.resetToken}`;

    const message = `
      <div style="text-align: center; color: #ffffff; background-color: #242130;">
        <header style="background-color: #1B1924;">
          <p style="padding: 10px; font-size: 20px; font-weight: bold; color: #cacaca;">
            THA SOLUTIONS
          </p>
        </header>
        <div style="padding: 20px;">
          <p style="font-size: 18px;">Para realizar a alteração da sua senha acesse o link abaixo:</p>
          <p>
            <a href="${resetUrl}"
              style="display: inline-block; padding: 10px 20px; background-color: #f01966; color: #242130; text-decoration: none; font-size: 16px; font-weight: 700; text-transform: uppercase; margin-top: 25px; margin-bottom: 25px;">
              Trocar Senha
            </a>
          </p>
          <p style="font-size: 18px;">
            O link de acesso expira em
            <strong style="color: #f01966;">10 minutos</strong>.
          </p>
          <p style="font-size: 14px; color: lightslategray;">
            Se você não solicitou esta alteração, por favor ignore este e-mail ou entre em contato conosco.
          </p>
        </div>
      </div>
    `;

    this.mailService.passwordRecoveryMail({
      email,
      subject: '',
      message: message
    });

    return;
  }

  async resetPassword(resetToken: string, password: string) {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const accountToken = await this.prisma.account_Token.findFirst({
      where: { token: resetPasswordToken }
    });

    if (!accountToken) {
      throw Error('Invalid token');
    }

    const user = await this.prisma.user.findFirst({
      where: { id: accountToken.id_user }
    });

    if (!user) {
      throw Error('User not found');
    }

    const newPassword = this.crypter(password);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: newPassword }
    });

    await this.prisma.account_Token.delete({
      where: { id_user: accountToken.id_user }
    });

    return;
  }

  async createResetToken(user: ResponseUserDto) {
    const resetToken = crypto.randomBytes(32).toString('hex');

    await this.prisma.account_Token.deleteMany({
      where: { id_user: user.id }
    });

    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const resetPasswordExpire = new Date(Date.now() + 10 * 60000);

    await this.prisma.account_Token.create({
      data: {
        token: resetPasswordToken,
        expires: resetPasswordExpire,
        User: { connect: { id: user.id } }
      }
    });

    return { resetToken, resetPasswordToken, resetPasswordExpire };
  }

  async remove(id: string) {
    try {
      return this.prisma.user
        .delete({
          where: { id }
        })
        .then(async (user) => {
          if (!user) {
            throw Error('User not found');
          }

          await this.imageService.deleteAll(id);

          return;
        });
    } catch (error) {
      throw Error(`Error in delete user ${error}`);
    }
  }

  //Criptografa a senha do usuário de acordo com a chave de criptografia definida no arquivo .env e protocolo AES-256-CBC
  crypter(password: string) {
    try {
      const iv = Buffer.from(crypto.randomBytes(16));

      const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        this.configService.get<string>('CRYPTO_SECRET')!,
        iv
      );

      let crypted = cipher.update(password, 'utf8', 'hex');
      crypted += cipher.final('hex');

      password = `${iv.toString('hex')}:${crypted}`;

      return password;
    } catch (error) {
      throw Error(`Error in cryptography ${error}`);
    }
  }
}
