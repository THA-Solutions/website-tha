import axios from 'axios';
import { User } from '../entities';

export class ClientService {
  static async createClient(client: FormData): Promise<User> {
    const res = await axios.post('http://localhost:3000/api/user', {
      ...client,
      role: 'customer'
    });

    return res.data;
  }

  static async getAllClients(): Promise<User[]> {
    const res = await axios.get('http://localhost:3000/api/user/role/customer');
    return res.data;
  }

  static async getClientById(id: string): Promise<User> {
    const res = await axios.get(`http://localhost:3000/api/user/${id}`);
    return res.data;
  }

  static async updateClient(id: string, client: User): Promise<User> {
    const res = await axios.put(`http://localhost:3000/api/user/${id}`, client);
    return res.data;
  }

  static async deleteClient(id: string): Promise<User> {
    const res = await axios.delete(`http://localhost:3000/api/user/${id}`);
    return res.data;
  }
}
