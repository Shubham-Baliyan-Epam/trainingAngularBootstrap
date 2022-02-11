export class Product {
  name!: string;
  id!: number;
  price!: number;
  catergory!: string;
  discount!: number;
  constructor(
    name: string,
    id: number,
    price: number,
    category: string,
    discount: number
  ) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.catergory = category;
    this.discount = discount;
  }
}
