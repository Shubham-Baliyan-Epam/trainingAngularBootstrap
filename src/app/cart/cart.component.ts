import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;
  total: number = 0;
  constructor(private cartService: CartService) {}
  removeItem(id: number) {
    this.cartService.removeItemFromCart(id);
  }
  ngOnInit(): void {
    this.cartService.checkCart().subscribe((cart) => {
      this.cart = cart;
      this.total = this.cart.products.reduce(
        (acc, curr) => (acc += curr.price),
        0
      );
    });
  }
}
