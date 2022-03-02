import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from 'src/appConfig';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
  url = appConfig.email;
  sendEmail(email: string, subject: string, message: string) {
    let data = { email, message, subject };
    let body = JSON.stringify(data);
    let headers = { 'content-type': 'application/json' };
    return this.http.post(this.url, body, { headers });
  }
}
