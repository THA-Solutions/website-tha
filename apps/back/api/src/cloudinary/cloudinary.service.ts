import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class CloudinaryService {
  constructor(private configService: ConfigService) {
    v2.config({
      cloud_name: this.configService.get('CLOUDINARY_NAME'),
      api_key: this.configService.get('CLOUDINARY_KEY'),
      api_secret: this.configService.get('CLOUDINARY_SECRET')
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: this.configService.get('CLOUDINARY_FOLDER') },
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (result) {
            resolve(result.secure_url);
          } else {
            reject(error);
          }
        }
      );

      toStream(file.buffer).pipe(upload);
      return upload;
    });
  }

  async removeImage(publicId: string) {
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(
        publicId,
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  }
}
