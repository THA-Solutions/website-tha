import axios from 'axios';
import { Client } from '../entities';

export class ClientService {
  static async createClient(client: FormData): Promise<Client> {
    //client.role = 'customer';
    const res = await axios.post('http://localhost:3000/api/user', client);
    return res.data;
  }

  static async getAllClients(): Promise<Client[]> {
    const res = await axios.get('http://localhost:3000/api/user/role/client');
    return res.data;
  }

  static async getClientById(id: string): Promise<Client> {
    const res = await axios.get(`http://localhost:3000/api/user/${id}`);
    return res.data;
  }

  static async updateClient(id: string, client: Client): Promise<Client> {
    const res = await axios.put(`http://localhost:3000/api/user/${id}`, client);
    return res.data;
  }

  static async deleteClient(id: string): Promise<Client> {
    const res = await axios.delete(`http://localhost:3000/api/user/${id}`);
    return res.data;
  }
}
