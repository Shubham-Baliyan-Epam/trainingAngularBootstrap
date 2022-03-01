import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductE } from './product-service.service';

export interface WishList {
  products: WishProduct[];
}
interface WishProduct extends ProductE {
  qty: number;
}
@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor() {}
  private wishList = new BehaviorSubject<WishList>({ products: [] });
  private dataStore: { products: WishProduct[] } = { products: [] };

  checkWishList(): Observable<WishList> {
    return this.wishList.asObservable();
  }
  setWishList(val: WishProduct) {
    if (
      this.dataStore.products.findIndex((item) => item.id === val.id) !== -1
    ) {
      this.dataStore.products.push({ ...val, qty: ++val.qty });
    } else {
      this.dataStore.products.push(val);
    }
    this.wishList.next(Object.assign({}, this.dataStore));
    this.setlocalStorage(this.dataStore);
  }
  setlocalStorage(data: WishList) {
    let newData = JSON.stringify(data);
    window.localStorage.setItem('wishList', newData);
  }
  removeItemFromCart(id: number) {
    this.dataStore.products = this.dataStore.products.filter(
      (item) => item.id !== id
    );
    this.wishList.next(Object.assign({}, this.dataStore));
    this.setlocalStorage(this.dataStore);
  }
  getLocalStorage() {
    let cart = window.localStorage.getItem('cart');
    if (cart?.length) {
      let newCart: WishList = JSON.parse(cart);
      this.dataStore = newCart;
      this.wishList.next(Object.assign({}, this.dataStore));
    }
  }
}
