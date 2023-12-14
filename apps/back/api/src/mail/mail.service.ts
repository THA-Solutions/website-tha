import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { inviteMailDto } from './dto/invite-mail.dto';
@Injectable()
export class MailService {
  constructor(private mailer: MailerService) {}

  async sendMail(inviteMailDto: inviteMailDto) {
    try {

      await this.mailer.sendMail({
        to: process.env.TARGET_MAIL,
        from: inviteMailDto.email,
        subject: '',
        html: ``
      });

      return;
    } catch (error) {
      throw Error(`Error in send mail ${error}`);
    }
  }
}
