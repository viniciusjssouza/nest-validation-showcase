import { IsDefined, IsNotEmpty, IsNumber, Max, Min, ValidateIf, ValidateNested } from 'class-validator';
import { BadWordsValidator } from './bad-words-validator';
import { UserDto } from './user.dto';

export class ReviewDto {
  @Min(0)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  comment: string;

  @ValidateNested()
  @IsDefined()
  user: UserDto;

  @IsNotEmpty()
  @IsNumber()
  libraryId: number;
}
