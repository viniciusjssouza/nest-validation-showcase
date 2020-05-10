import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewDto } from './review.dto';

@Controller('reviews')
@UsePipes(new ValidationPipe())
export class ReviewController {
  constructor() {}

  @Post('/')
  async create(@Body() review: ReviewDto): Promise<any> {
    return {
      valid: true
    };
  }
}
