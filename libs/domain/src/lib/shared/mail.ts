import axios from 'axios';
import { FieldValues } from 'react-hook-form';

import ApiConfig from './api-config';

export class MailService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/mail`;

  static async sendMail(mail: FieldValues): Promise<void> {
    const res = await axios.post(`${this.apiPath}/send`, mail);
    return;
  }
}
