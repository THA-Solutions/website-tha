import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { inviteMailDto } from './dto/invite-mail.dto';
import { recoveryMailDto } from './dto/recovery-mail.dto';
@Injectable()
export class MailService {
  constructor(private mailer: MailerService) { }

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

  async passwordRecoveryMail(recoveryMailDto: recoveryMailDto) {
    try {
      const options = {
        from: `THA Solutions [Suporte]<${process.env.MAIL_USER}>`,
        to: recoveryMailDto.email,
        subject: 'Recuperação de senha',
        html: recoveryMailDto.message
      };

      await this.mailer.sendMail(options);
    } catch (error) {
      throw Error(`Error in send recovery mail ${error}`);
    }
  }
}
