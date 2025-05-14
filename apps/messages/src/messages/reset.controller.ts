import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResetService } from './reset.service';

@Controller('api')
export class ResetController {
  constructor(private readonly ResetService: ResetService) {}

  @Get('reset')
  getReset(_: unknown, @Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    return this.ResetService.reset(res);
  }
}
