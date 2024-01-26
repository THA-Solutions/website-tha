import axios from 'axios';

import ApiConfig from './api-config';
import { Inverter } from '../entities';

export class InverterService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/inverter`;

  static async createInverter(inverter: FormData): Promise<Inverter> {
    const res = await axios.post(this.apiPath, inverter, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async getAllInverters(): Promise<Inverter[]> {
    const res = await axios.get(this.apiPath);
    return res.data;
  }

  static async getInverterById(id: string): Promise<Inverter> {
    console.log('id na lib shared: ', id)
    if (id.search(/\/+/g){
      console.log("tem barra")
    }
    
    ) const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }

  static async updateInverter(id: string, updatedInverter: FormData): Promise<Inverter> {
    const res = await axios.patch(`${this.apiPath}/${id}`, updatedInverter, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async deleteInverter(id: string): Promise<Inverter> {
    const res = await axios.delete(`${this.apiPath}/${id}`);
    return res.data;
  }
}
