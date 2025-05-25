import { Test, TestingModule } from '@nestjs/testing';
import { ValidateChirpService } from './validate_chirp.service';

describe('ValidateChirpService', () => {
  let service: ValidateChirpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidateChirpService],
    }).compile();

    service = module.get<ValidateChirpService>(ValidateChirpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
