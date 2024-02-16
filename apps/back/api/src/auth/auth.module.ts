import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { RoleService } from './role.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, RoleService],
  imports: [UserModule],
  exports: [RoleService]
})
export class AuthModule {}
