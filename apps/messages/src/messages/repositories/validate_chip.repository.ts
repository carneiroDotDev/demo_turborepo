import { ValidateChirpDto } from 'dtos/validate_chirp.dto';

export class ValidateChipRepository {
  private static readonly MAX_LENGTH = 140;

  validate(
    content: ValidateChirpDto,
  ): { body: string } | { cleanedBody: string } | { error: string } {
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
      // Cleaning up the content: if the contet body contains the words
      // kerfuffle, sharbert, or fornax those should be substituted with
      // **** being case insensitive
      const messageBody = json.body
        .replace(/kerfuffle/gi, '****')
        .replace(/sharbert/gi, '****')
        .replace(/fornax/gi, '****');
      json.body = messageBody;
      console.log('messageBody ->', messageBody);

      const isCleaned = messageBody !== json.body;
      if (isCleaned) {
        console.log('Chirp was cleaned');
      }

      return {
        cleanedBody: messageBody,
      };
    } catch (error) {
      console.log('error chirp ->', error);
      return {
        error: 'Something went wrong',
      };
    }
  }
}
