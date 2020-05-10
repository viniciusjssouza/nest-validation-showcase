import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LibraryDto } from './library.dto';

@Controller('libraries')
export class LibraryController {
  constructor() {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() library: LibraryDto): Promise<any> {
    return {
      valid: true,
    };
  }
}
