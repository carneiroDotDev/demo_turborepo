import { Body, Controller, Post, Res } from '@nestjs/common';
import { ValidateChirpService } from '../services/validate_chirp.service';
import { ValidateChirpDto } from 'dtos/validate_chirp.dto';
import { Response } from 'express';

@Controller('api')
export class ValidateChirpController {
  private validateChirpService: ValidateChirpService;
  constructor() {
    // Should not do like this, but dependency injection
    this.validateChirpService = new ValidateChirpService();
  }

  @Post('validate_chirp')
  validateChirp(@Res() res: Response, @Body() body: ValidateChirpDto) {
    return this.validateChirpService.validate(res, body);
  }
}
