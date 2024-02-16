import axios from 'axios';
import ApiConfig from 'libs/domain/src/lib/shared/api-config';

export class ImageService {
  private static readonly apiPath = `${ApiConfig.getApiUrl()}/image`;

  static async getImageData(id: string) {
    const res = await axios.get(`${this.apiPath}/${id}`);
    return res.data;
  }

  static async createImage(image: FormData) {
    const res = await axios.post(this.apiPath, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('role')}`
      }
    });

    return res.data;
  }
}
