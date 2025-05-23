import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import config from 'src/config';
import { join } from 'path';

@Injectable()
export class MetricsService {
  metrics(@Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(`Hits: ${config.fileserverHits}`);
    return res;
  }

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
