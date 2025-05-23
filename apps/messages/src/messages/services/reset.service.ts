import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import config from 'src/config';

@Injectable()
export class ResetService {
  reset(@Res() res: Response) {
    config.fileserverHits = 0;
    res.set('Cache-Control', 'no-cache');
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send('{"status":"ok","message":"Reset done"}');
    return res;
  }
}
