import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  url = 'http://localhost:8080/order';
  constructor(private http: HttpClient) {}

  checkout(data: any) {
    let headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(data);
    return this.http.post<any>(this.url, body, { headers });
  }
  getOrderDataByUser(id: number) {
    return this.http.get(this.url + '/user/' + id);
  }
}
