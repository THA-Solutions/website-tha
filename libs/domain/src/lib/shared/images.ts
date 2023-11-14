import axios from 'axios';

export class images {
  static async getImageData(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/image/${id}`);
      return res.data;
    } catch (error) {
      throw Error(`Error in get image data ${error}`);
    }
  }
}
