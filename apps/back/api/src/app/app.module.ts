import 'multer';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from '../article/article.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma.module';
import { ClientModule } from '../client/client.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { CloudinaryController } from '../cloudinary/cloudinary.controller';
import PrismaService from '../prisma.service';
import { AuthGuard } from '../auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  imports: [
    ArticleModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    ClientModule,
    CloudinaryModule
  ],
  controllers: [AppController, CloudinaryController],
  providers: [
    AppService,
    PrismaService,
    ConfigModule,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
  exports: [PrismaService]
})
export class AppModule {}
