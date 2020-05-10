import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {

  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsEmail()
  email: string
}
