import { validate, validateSync } from 'class-validator';
import { Language, LibraryDto } from '../src/library.dto';

describe('validate programmatically', () => {
  it('should async validate the object', async () => {
    const library = new LibraryDto({
      name: "ReactJS",
      repository: "github",
      stars: 148000,
      language: Language.JAVASCRIPT,
    })

    const errors = await validate(library);
    console.log(errors);
  });

  it('should sync validate the object', () => {
    const library = new LibraryDto({
      name: "ReactJS",
      repository: "https://github.com/facebook/react",
      stars: 148000,
      language: Language.JAVASCRIPT,
    })

    const errors = validateSync(library);
    console.log(errors);
  });
});
