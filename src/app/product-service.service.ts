import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductE {
  id: number;
  price: number;
  rating: number;
  stock: number;
  name: string;
  brand: string;
  category: string;
  img: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  private _products = new BehaviorSubject<ProductE[]>([]);
  private baseUrl = 'https://server.transcoders.run/products';
  private dataStore: { products: ProductE[] } = { products: [] };
  readonly products = this._products.asObservable();
  getProducts(query = '') {
    let url = this.baseUrl;
    if (query) {
      url += query;
    }

    this.http.get<ProductE[]>(url).subscribe(
      (data) => {
        this.dataStore.products = data;

        this._products.next(Object.assign({}, this.dataStore).products);
      },
      (error) => console.log('Could not load products.')
    );
  }
}
