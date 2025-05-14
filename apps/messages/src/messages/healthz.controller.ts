import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class HealthzController {
  @Get('healthz')
  listMessages(@Res() res: Response) {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send('OK');
  }
}
