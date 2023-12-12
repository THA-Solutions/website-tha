import axios from 'axios';

import ApiConfig from './api-config';

export class InverterService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/inverter`;

  static async getInvertersData() {
    const res = await axios.get(this.apiPath);
    return res.data;
  }
  static async getInvertersDataById(id: string) {
    const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }
}
