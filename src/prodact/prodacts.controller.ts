import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdactsService } from './prodacts.service';

@Controller('prodacts')
export class ProdactsController {
  constructor(public prodactsService: ProdactsService) {}
  @Post()
  dimental(
    @Body() mybody: { title: string; description: string; price: number },
  ) {
    const oo: string = this.prodactsService.addprodacttoarr(
      mybody.title,
      mybody.description,
      mybody.price,
    );
    return oo;
  }
  @Get()
  retaAll() {
    return this.prodactsService.getall();
  }
}
