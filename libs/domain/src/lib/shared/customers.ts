import axios from 'axios';

import ApiConfig from './api-config';
import { User } from '../entities';

export class CustomerService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/user`;

  static async createCustomer(customer: FormData): Promise<User> {
    const res = await axios.post(this.apiPath, customer, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });

    return res.data;
  }

  static async getAllCustomers(): Promise<User[]> {
    const res = await axios.get(`${this.apiPath}/role/customer`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async getCustomerById(id: string): Promise<User> {
    const res = await axios.get(`${this.apiPath}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async updateCustomer(
    id: string,
    updatedCustomer: FormData
  ): Promise<User> {
    const res = await axios.patch(`${this.apiPath}/${id}`, updatedCustomer, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async deleteCustomer(id: string): Promise<User> {
    const res = await axios.delete(`${this.apiPath}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async sendTokenToResetPassword(email: object): Promise<void> {
    const res = await axios.post(`${this.apiPath}/recovery-password`, email, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async resetPassword(data: {
    token: string;
    password: string;
  }): Promise<void> {
    const res = await axios.post(`${this.apiPath}/reset-password`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }
}
