import { Test, TestingModule } from '@nestjs/testing';
import { ValidateChirpController } from './validate_chirp.controller';

describe('ValidateChirpController', () => {
  let controller: ValidateChirpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidateChirpController],
    }).compile();

    controller = module.get<ValidateChirpController>(ValidateChirpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
