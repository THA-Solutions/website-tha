import axios from 'axios';

import ApiConfig from './api-config';
import { User } from '../entities';

export class CustomerService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/user`;

  static async createCustomer(customer: FormData): Promise<User> {
    const res = await axios.post(this.apiPath, {
      ...customer,
      role: 'customer'
    });

    return res.data;
  }

  static async getAllCustomers(): Promise<User[]> {
    const res = await axios.get(`${this.apiPath}/role/customer`);
    return res.data;
  }

  static async getCustomerById(id: string): Promise<User> {
    const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }

  static async updateCustomer(id: string, customer: User): Promise<User> {
    const res = await axios.put(`${this.apiPath}/${id}`, customer);
    return res.data;
  }

  static async deleteCustomer(id: string): Promise<User> {
    const res = await axios.delete(`${this.apiPath}/${id}`);
    return res.data;
  }
}