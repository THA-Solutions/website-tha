import axios from 'axios';
import { Article } from '../entities';

export class ArticleSerivce {
  static async createArticle(article: FormData): Promise<Article> {
    const res = await axios.post('http://localhost:3000/api/article', article, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  }

  static async getAllArticles(): Promise<Article[]> {
    const res = await axios.get('http://localhost:3000/api/article');
    return res.data;
  }

  static async getArticleById(id: string): Promise<Article> {
    const res = await axios.get(`http://localhost:3000/api/article/${id}`);
    return res.data;
  }

  static async updateArticle(
    id: string,
    updatedArticle: FormData
  ): Promise<Article> {
    const res = await axios.patch(
      `http://localhost:3000/api/article/${id}`,
      updatedArticle,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  }

  static async deleteArticle(id: string): Promise<Article> {
    const res = await axios.delete(`http://localhost:3000/api/article/${id}`);
    return res.data;
  }
}
