export class Prodact {
  id: string;
  title: string;
  description: string;
  price: number;

  constructor(id: string, title: string, description: string, price: number) {
    this.id = id;
    this.description = description;
    this.title = title;
    this.price = price;
  }
}
