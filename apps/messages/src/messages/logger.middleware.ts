import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const isOk = res.statusCode >= 200 && res.statusCode < 300;
      console.log(
        `${method} ${url} ${originalUrl} ${res.statusCode} - ${duration}ms`,
      );
      if (!isOk) {
        console.log(
          `[NON-OK] ${method} ${originalUrl} - Status: ${res.statusCode}`,
        );
      }
    });

    next();
  }
}
