import { Injectable } from '@angular/core';
import { Product } from 'src/productClass';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productsArray = new BehaviorSubject<Product[]>([]);
  private dataStore: { productsArray: Product[] } = { productsArray: [] };
  readonly productsArray = this._productsArray.asObservable();

  constructor() {
    let prod1 = new Product('Lg Tv', 1, 12222, 'Electorics', 0);
    let prod2 = new Product('Oneplus Tv', 2, 22222, 'Electronics', 10);
    let prod3 = new Product('TCL Tv', 3, 33333, 'Electronics', 5);
    this.dataStore.productsArray.push(prod1);
    this.dataStore.productsArray.push(prod2);
    this.dataStore.productsArray.push(prod3);
    this._productsArray.next(Object.assign({}, this.dataStore).productsArray);
  }
  // getAllProducts(): Product[] {
  //   return this.productsArray.asObservables();
  // }
  getSingleProduct(id: number): Product {
    let item = this.dataStore.productsArray.find((item) => item.id === id);
    if (item) {
      return item;
    }
    return {
      id: 0,
      name: '',
      category: '',
      price: 0,
      discount: 0,
    };
  }
  updateproduct(id: number, data: Product) {
    let index = this.dataStore.productsArray.findIndex(
      (item) => item.id === id
    );
    if (index !== -1) {
      this.dataStore.productsArray[index] = data;
      this._productsArray.next(Object.assign({}, this.dataStore).productsArray);
    }
  }
  addSingleProduct(data: Product) {
    this.dataStore.productsArray.push(data);
    this._productsArray.next(Object.assign({}, this.dataStore).productsArray);
  }
  deleteProduct(id: number) {
    this.dataStore.productsArray = this.dataStore.productsArray.filter(
      (item) => item.id !== id
    );
    this._productsArray.next(Object.assign({}, this.dataStore).productsArray);
  }
}
