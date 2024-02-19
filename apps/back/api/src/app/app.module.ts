import 'multer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from '../article/article.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { CloudinaryController } from '../cloudinary/cloudinary.controller';
import PrismaService from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { MailModule } from '../mail/mail.module';
import { RoleGuard } from '../auth/role.guard';

@Module({
  imports: [
    ArticleModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    CloudinaryModule,
    MailModule
  ],
  controllers: [AppController, CloudinaryController],
  providers: [
    AppService,
    PrismaService,
    ConfigModule,
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],
  exports: [PrismaService]
})
export class AppModule {}
