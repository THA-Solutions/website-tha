import axios from 'axios';

export class articles {
  static async createArticle(article: FormData) {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/article',
        article,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  static async getAllArticles() {
    try {
      const res = await axios.get('http://localhost:3000/api/article');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getArticleById(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/article/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  static async updateArticle(id: string, updatedArticle: FormData) {
    try {
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
    } catch (error) {
      console.error(error);
      return;
    }
  }

  static async deleteArticle(id: string) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/article/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
