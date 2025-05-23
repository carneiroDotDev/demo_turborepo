import { Controller, Get, Res } from '@nestjs/common';
import { MetricsService } from '../services/metrics.service';
import { Response } from 'express';
import config from 'src/config';

@Controller('admin')
export class MetricsController {
  constructor(private readonly MetricsService: MetricsService) {}
  @Get('metrics')
  getIndex(_: unknown, @Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    //those next two lines are for the browser
    //alwas revalidate the resource with the server
    //and not use the cached version
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(
      `
     <html>
      <body>
        <h1>Welcome, Chirpy Admin</h1>
        <p>Chirpy has been visited ${config.fileserverHits} times!</p>
      </body>
     </html> 
      `,
    );
  }
}
