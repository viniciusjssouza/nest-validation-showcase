import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { ReviewController } from './review.controller';

@Module({
  imports: [],
  controllers: [LibraryController, ReviewController],
  providers: [],
})
export class AppModule {}
