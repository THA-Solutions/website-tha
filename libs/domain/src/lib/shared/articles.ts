import axios from 'axios';

import ApiConfig from './api-config';
import { Article } from '../entities';

export class ArticleSerivce {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/article`;

  static async createArticle(article: FormData): Promise<Article> {
    const res = await axios.post(this.apiPath, article, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async getAllArticles(): Promise<Article[]> {
    const res = await axios.get(this.apiPath, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async getArticleById(id: string): Promise<Article> {
    const res = await axios.get(`${this.apiPath}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async updateArticle(
    id: string,
    updatedArticle: FormData
  ): Promise<Article> {
    const res = await axios.patch(`${this.apiPath}/${id}`, updatedArticle, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }

  static async deleteArticle(id: string): Promise<Article> {
    const res = await axios.delete(`${this.apiPath}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  }
}
