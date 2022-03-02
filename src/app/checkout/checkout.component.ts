import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private fb: FormBuilder, private cartService: CartService) {}
  myForm!: FormGroup;
  cart!: Cart;
  total: number = 0;
  ngOnInit(): void {
    this.cartService.checkCart().subscribe((cart) => {
      this.cart = cart;
      this.calculateTotal();
    });
    this.myForm = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
    });
  }
  calculateTotal() {
    this.total = this.cart.products.reduce((acc, index) => {
      return (acc = acc + index.price);
    }, 0);
  }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid, form.value); // true or false
    console.log('Name', form.value.address1);
    console.log('Email', form.value.address2);
    // let id = Math.floor(Math.random() * 100 + 1);
  }
}
