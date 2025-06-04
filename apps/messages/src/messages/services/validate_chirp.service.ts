import { Injectable, Res } from '@nestjs/common';
import { ValidateChipRepository } from '../repositories/validate_chip.repository';
import { ValidateChirpDto } from 'dtos/validate_chirp.dto';
import { Response } from 'express';

@Injectable()
export class ValidateChirpService {
  validateChirpRepo: ValidateChipRepository;
  constructor() {
    this.validateChirpRepo = new ValidateChipRepository();
  }

  validate(@Res() res: Response, content: ValidateChirpDto) {
    const response = this.validateChirpRepo.validate(content);
    res.set('Cache-Control', 'no-cache');
    res.set('Content-Type', 'application/json; charset=utf-8');

    if ('error' in response) {
      res.status(400).send(JSON.stringify({ error: response.error }));
      return res;
    }

    return res.status(200).send(response);
  }
}
