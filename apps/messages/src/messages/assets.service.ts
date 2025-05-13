import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Injectable()
export class AssetsService {
  getFileByName(name: string, res: Response) {
    const filePath = join(__dirname, '../..', 'public', name);
    res.status(200).sendFile(filePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).end();
      }
    });
  }
}
