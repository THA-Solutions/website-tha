import axios from 'axios';

export class inverters {
  static async getInvertersData() {
    try {
      const res = await axios.get('http://localhost:3000/api/inverter');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  static async getInvertersDataById(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/inverter/${id}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
