import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css'],
})
export class MyorderComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private authService: AuthService
  ) {}
  user: any;
  orders: any;
  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.checkoutService.getOrderDataByUser(this.user.id).subscribe((res) => {
      this.orders = res.data;
      console.log(res);
    });
  }
}
