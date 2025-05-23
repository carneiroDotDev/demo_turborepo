import { Injectable, NestMiddleware } from '@nestjs/common';
import config from 'src/config';

@Injectable()
export class MiddlewareMetricsIncMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('config.fileserverHits brefore ->', config.fileserverHits);
    config.fileserverHits++;
    config.fileserverHits++;
    console.log('config.fileserverHits after ->', config.fileserverHits);
    next();
  }
}
