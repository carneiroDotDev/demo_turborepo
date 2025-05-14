import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import config from 'src/config';

@Injectable()
export class MetricsService {
  metrics(@Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(`Hits: ${config.fileserverHits}`);
    return res;
  }
}
