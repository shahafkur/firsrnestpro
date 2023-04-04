import { Prodact } from './prodact';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ProdactsService {
  prodacarr: Prodact[] = [];

  addprodacttoarr(title: string, description: string, price: number):string {
    const id: string = new Date().toISOString();
    const pro: Prodact = new Prodact(id, title, description, price);
    this.prodacarr.push(pro);
    return 'shofo ya soal';
  }
  getall(){
    return this.prodacarr;
  }
}