import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductE } from './product-service.service';
export interface Cart {
  products: ProductE[];
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cart = new BehaviorSubject<Cart>({ products: [] });
  private dataStore: { products: ProductE[] } = { products: [] };

  checkCart(): Observable<Cart> {
    return this.cart.asObservable();
  }
  setCart(val: ProductE) {
    this.dataStore.products.push(val);

    this.cart.next(Object.assign({}, this.dataStore));
    this.setlocalStorage(this.dataStore);
  }

  setlocalStorage(data: Cart) {
    let newData = JSON.stringify(data);
    window.localStorage.setItem('cart', newData);
  }
  removeItemFromCart(id: number) {
    this.dataStore.products = this.dataStore.products.filter(
      (item) => item.id !== id
    );
    this.cart.next(Object.assign({}, this.dataStore));
    this.setlocalStorage(this.dataStore);
  }
  getLocalStorage() {
    let cart = window.localStorage.getItem('cart');
    if (cart?.length) {
      let newCart: Cart = JSON.parse(cart);
      this.dataStore = newCart;
      this.cart.next(Object.assign({}, this.dataStore));
    }
  }
}
