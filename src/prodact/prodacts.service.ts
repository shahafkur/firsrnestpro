import { Prodact } from './prodact';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ProdactsService {
  prodacarr: Prodact[] = [];

  addprodacttoarr(
    title33: string,
    description22: string,
    price11: number,
  ): string {
    const id: string = new Date().toISOString();
    const pro: Prodact = new Prodact(id, title33, description22, price11);
    this.prodacarr.push(pro);
    return 'shofo ya soal';
  }
  getall(){
    return this.prodacarr;
  }
}