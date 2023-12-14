import axios from 'axios';

export class inverters {
  static async getInvertersData() {
    try {
      const res = await axios.get('http://localhost:3000/api/inverter');
      return res.data;
    } catch (error) {
      throw Error(`Error in get inverters ${error}`);
    }
  }
  static async getInvertersDataById(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/inverter/${id}`);
      return res.data;
    } catch (error) {
      throw Error(`Error in get inverter by id ${error}`);
    }
  }
}
