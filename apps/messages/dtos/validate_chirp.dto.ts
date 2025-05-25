import { IsString } from 'class-validator';

export class ValidateChirpDto {
  @IsString()
  body: string;
}
