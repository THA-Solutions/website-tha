import axios from 'axios';
import { Team } from '../entities';

export class TeamService {
  static async createEmployee(employee: FormData): Promise<Team> {
    const res = await axios.post('http://localhost:3000/api/team', employee, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async getAllEmployees(): Promise<Team[]> {
    const res = await axios.get('http://localhost:3000/api/team');
    return res.data;
  }

  static async getEmployeeById(id: string): Promise<Team> {
    const res = await axios.get(`http://localhost:3000/api/team/${id}`);
    return res.data;
  }

  static async updateEmployee(
    id: string,
    updatedEmployee: FormData
  ): Promise<Team> {
    const res = await axios.patch(
      `http://localhost:3000/api/team/${id}`,
      updatedEmployee,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  }

  static async deleteEmployee(id: string): Promise<Team> {
    const res = await axios.delete(`http://localhost:3000/api/team/${id}`);
    return res.data;
  }
}
