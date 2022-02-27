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
  description: string;
}
export interface ReqData {
  status: string;
  message?: string;
  data?: ProductE[] | ProductE;
}
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  private _products = new BehaviorSubject<ProductE[]>([]);
  private baseUrl = 'https://server.transcoders.run/product';
  private dataStore: { products: ProductE[] } = { products: [] };
  readonly products = this._products.asObservable();
  getProducts(query = '') {
    let url = this.baseUrl;
    if (query) {
      url += query;
    }

    this.http.get<ReqData>(url).subscribe(
      (data) => {
        if (data.data && Array.isArray(data.data)) {
          this.dataStore.products = data.data;
          this._products.next(Object.assign({}, this.dataStore).products);
        }
      },
      (error) => console.log('Could not load products.')
    );
  }
  getProduct(id: number) {
    let url = this.baseUrl + '/' + id;
    return this.http.get<ReqData>(url);
  }
}
