import { Injectable } from '@angular/core';

export interface product {
  id: number;
  price: number;
  rating: number;
  stock: number;
  name: string;
  category: string;
  img: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}
}
