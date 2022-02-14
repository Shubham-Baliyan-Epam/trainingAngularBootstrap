export class Product {
  [key: string]: any;
  name!: string;
  id!: number;
  price!: number;
  category!: string;
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
    this.category = category;
    this.discount = discount;
  }
}
