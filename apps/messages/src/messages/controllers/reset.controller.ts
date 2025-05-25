import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResetService } from '../services/reset.service';

@Controller('admin')
export class ResetController {
  constructor(private readonly ResetService: ResetService) {}

  @Post('reset')
  getReset(_: unknown, @Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    return this.ResetService.reset(res);
  }
}
