import axios from 'axios';

export class team {
  static async createEmployee(employee: FormData) {
    try {
      const res = await axios.post('http://localhost:3000/api/team', employee, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  static async getAllEmployees() {
    try {
      const res = await axios.get('http://localhost:3000/api/team');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async deleteEmployee(id: string) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/team/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
