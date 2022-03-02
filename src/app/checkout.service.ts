import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  url = 'http://localhost:8080/create-checkout-session';
  constructor(private http: HttpClient) {}

  checkout() {
    return this.http.post(this.url, {});
  }
}
