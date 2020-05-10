import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import BadWordsFilter = require('bad-words');

export function BadWordsValidator(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'badWordsValidator',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) {
            return true;
          }
          const filter = new BadWordsFilter();
          return !filter.isProfane(value);
        },
      },
    });
  };
}
