import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductE {
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
  constructor(private http: HttpClient) {}
  private _products = new BehaviorSubject<ProductE[]>([]);
  private baseUrl = 'http://localhost:3000/products';
  private dataStore: { products: ProductE[] } = { products: [] };
  readonly products = this._products.asObservable();
  getProducts() {
    this.http.get<ProductE[]>(`${this.baseUrl}`).subscribe(
      (data) => {
        this.dataStore.products = data;

        this._products.next(Object.assign({}, this.dataStore).products);
      },
      (error) => console.log('Could not load products.')
    );
  }
}
