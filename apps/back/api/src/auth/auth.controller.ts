import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signInDto.to';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() signInDto: signInDto) {
    const user = await this.authService.signIn(
      signInDto.email,
      signInDto.password
    );

    return user;
  }
}
