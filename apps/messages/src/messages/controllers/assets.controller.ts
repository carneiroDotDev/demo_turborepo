import { Controller, Get, Param, Res } from '@nestjs/common';
import { AssetsService } from '../services/assets.service';
import { Response } from 'express';

@Controller('app')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}
  @Get('assets/:fileName')
  getFile(@Param('fileName') fileName: string, @Res() res: Response) {
    return this.assetsService.getFileByName(fileName, res);
  }

  @Get()
  getIndex(_: unknown, @Res() res: Response) {
    res.set('Cache-Control', 'no-cache');
    return this.assetsService.getFileByName('index.html', res);
  }
}
