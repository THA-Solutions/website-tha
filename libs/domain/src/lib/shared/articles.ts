import axios from 'axios';

export class articles {
  static async getPostData() {
    try {
      const res = await axios.get('http://localhost:3000/api/article');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getPostDataById(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/article/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
