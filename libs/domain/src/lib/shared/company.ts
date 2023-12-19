import axios from 'axios';

import ApiConfig from './api-config';
import { Company } from '../entities';

export class CompanyService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/company`;

  static async createCompany(company: FormData): Promise<Company> {
    const res = await axios.post(this.apiPath, company, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async getAllCompanies(): Promise<Company[]> {
    const res = await axios.get(this.apiPath);
    return res.data;
  }

  static async getCompanyById(id: string): Promise<Company> {
    const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }

  static async updateCompany(
    id: string,
    updatedCompany: FormData
  ): Promise<Company> {
    const res = await axios.put(`${this.apiPath}/${id}`, updatedCompany, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async deleteCompany(id: string): Promise<Company> {
    const res = await axios.delete(`${this.apiPath}/${id}`);
    return res.data;
  }
}
