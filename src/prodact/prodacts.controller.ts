import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdactsService } from './prodacts.service';

@Controller('prodacts')
export class ProdactsController {

  constructor(readonly prodactsService: ProdactsService) {
  }
  @Post()
  dimental(
    @Body('price') prici: number,
    @Body('title') tit: string,
    @Body('desi') desc: string,
  ): {id:string} {
    const oo: string = this.prodactsService.addprodacttoarr(tit, desc, prici);
    return {id:'shodome'}
  }
  @Get()
  retaAll(){
    return this.prodactsService.getall();
  }
}
