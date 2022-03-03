import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CheckoutService } from '../checkout.service';
import * as moment from 'moment';

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
  moment = moment;
  user: any;
  orders: any;
  getStatus(date: string) {
    date = moment(date).format('DD/MM/YY');
    let today = moment().format('DD/MM/YY');
    console.log(date, today);
    if (date === today) {
      return 'Order Placed';
    }
    if (moment(date, 'DD/MM/YY').add(1, 'days').format('DD/MM/YY') === today) {
      return 'Shipped';
    }
    if (moment(date, 'DD/MM/YY').add(2, 'days').format('DD/MM/YY') === today) {
      return 'Out for delivery';
    }

    return 'Delivered';
  }
  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.checkoutService.getOrderDataByUser(this.user.id).subscribe((res) => {
      this.orders = res.data;
      console.log(res);
    });
  }
}
