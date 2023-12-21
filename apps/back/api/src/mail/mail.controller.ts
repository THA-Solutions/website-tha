import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { inviteMailDto } from './dto/invite-mail.dto';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('send')
  async sendEmail(@Body() inviteMailDto: inviteMailDto) {
    return await this.mailService.sendMail(inviteMailDto);
  }
}
