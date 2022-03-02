import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from '../auth.service';
import { Cart, CartService } from '../cart.service';
import { CheckoutService } from '../checkout.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private emailService: EmailService
  ) {}
  myForm!: FormGroup;
  cart!: Cart;
  user: any;
  total: number = 0;
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params) => {
      console.log(params, 'QUEYR  NSAJNKSANDKN');
    });
    this.user = this.authService.getUser();
    this.cartService.checkCart().subscribe((cart) => {
      this.cart = cart;
      this.calculateTotal();
    });
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
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
    let data = {
      user_id: this.user.id,
      name: form.value.name,
      address1: form.value.address1,
      address2: form.value.address2,
      mobile: form.value.mobile,
    };
    let arrData = this.cart.products.map((item) => {
      return {
        ...data,
        sale_price: item.price,
        product_id: item.id,
      };
    });
    forkJoin(
      arrData.map((item) => this.checkoutService.checkout(item))
    ).subscribe((res) => {
      this.emailService.sendEmail(
        this.user.email,
        'Order Placed',
        'Thankyou for placing the order'
      );
      console.log(res, '+=======================');
      this.cartService.refereshCart();
    });

    // this.checkoutService.checkout().subscribe((res) => {
    //   console.log('checkout done', res);
    // });
    // let id = Math.floor(Math.random() * 100 + 1);
  }
}
