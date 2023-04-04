import { Module } from '@nestjs/common';
import { ProdactsController } from './prodacts.controller';
import { ProdactsService } from './prodacts.service';

@Module({
  imports: [],
  controllers: [ProdactsController],
  providers: [ProdactsService],
})
export class ProdactsModule {}
