import { ValidateChirpDto } from 'dtos/validate_chirp.dto';

export class ValidateChipRepository {
  private static readonly MAX_LENGTH = 140;

  validate(content: ValidateChirpDto): { valid: boolean } | { error: string } {
    try {
      const jsonString = JSON.stringify(content);
      const json = JSON.parse(jsonString) as ValidateChirpDto;
      console.log('json ->', json);

      if (typeof json.body !== 'string') {
        return {
          error: 'Invalid content type',
        };
      }

      if (json.body.length > ValidateChipRepository.MAX_LENGTH) {
        return {
          error: 'Chirp is too long',
        };
      }

      console.log(json);

      return {
        valid: true,
      };
    } catch (error) {
      console.log('error chirp ->', error);
      return {
        error: 'Something went wrong',
      };
    }
  }
}
