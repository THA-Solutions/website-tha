import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
    async uploadImage(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream(
                { folder: 'images' },
                (error, result) => {
                    if (result) {
                        resolve(result!.secure_url);
                    } else {
                        reject(error);
                    }
                },
            );
            toStream(file.buffer).pipe(upload);
            return upload;
        });
    }
}

