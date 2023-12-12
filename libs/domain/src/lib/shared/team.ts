import axios from 'axios';

import ApiConfig from './api-config';
import { Team } from '../entities';

export class TeamService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/team`;

  static async createEmployee(employee: FormData): Promise<Team> {
    const res = await axios.post(this.apiPath, employee, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async getAllEmployees(): Promise<Team[]> {
    const res = await axios.get(this.apiPath);
    return res.data;
  }

  static async getEmployeeById(id: string): Promise<Team> {
    const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }

  static async updateEmployee(
    id: string,
    updatedEmployee: FormData
  ): Promise<Team> {
    const res = await axios.patch(`${this.apiPath}/${id}`, updatedEmployee, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async deleteEmployee(id: string): Promise<Team> {
    const res = await axios.delete(`${this.apiPath}/${id}`);
    return res.data;
  }
}
