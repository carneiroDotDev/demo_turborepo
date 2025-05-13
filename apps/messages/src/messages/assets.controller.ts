import { Controller, Get, Param, Res } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Response } from 'express';

@Controller()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}
  @Get('assets/:fileName')
  getFile(@Param('fileName') fileName: string, @Res() res: Response) {
    return this.assetsService.getFileByName(fileName, res);
  }
}
