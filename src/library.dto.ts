import { IsIn, IsNotEmpty, IsNumber, IsUrl, Min } from 'class-validator';

export enum Language {
  JAVASCRIPT = 'Javascript',
  TYPESCRIPT = 'Typescript',
  PYTHON = 'Python',
  KOTLIN = 'Kotlin',
}

const allLanguages = Object.keys(Language).map(k => Language[k as any]).map(v => v as Language)

export class LibraryDto {

  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsUrl({ }, { message: 'repository must be a valid URL' })
  @IsNotEmpty()
  repository: string;

  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'start must be a valid integer number' })
  @IsNotEmpty()
  @Min(0)
  stars: number;

  @IsIn(allLanguages, { message: 'must a supported language'})
  @IsNotEmpty()
  language: Language;

  constructor(initialData: Partial<LibraryDto> = {}) {
    Object.assign(this, initialData);
  }
}
