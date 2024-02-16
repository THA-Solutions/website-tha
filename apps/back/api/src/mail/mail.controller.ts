import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { inviteMailDto } from './dto/invite-mail.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('send')
  @Public()
  async sendEmail(@Body() inviteMailDto: inviteMailDto) {
    return await this.mailService.sendMail(inviteMailDto);
  }
}
