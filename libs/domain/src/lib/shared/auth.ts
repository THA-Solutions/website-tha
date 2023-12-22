import axios from 'axios';

import ApiConfig from './api-config';
import { Auth, User } from '@tha-solutions';

export class AuthorizationService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/auth`;

  static async signIn(credentials: Auth): Promise<User> {
    const res = await axios.post(`${this.apiPath}/login`, {
      email: credentials!.email,
      password: credentials!.password
    });

    return res.data;
  }
}
