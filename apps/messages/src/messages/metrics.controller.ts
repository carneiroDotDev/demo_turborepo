import { Controller, Get, Res } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Response } from 'express';

@Controller('api')
export class MetricsController {
  constructor(private readonly MetricsService: MetricsService) {}
  @Get('metrics')
  getMetrics(_: unknown, @Res() res: Response) {
    return this.MetricsService.metrics(res);
  }
}
