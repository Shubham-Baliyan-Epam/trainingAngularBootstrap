import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Auth {
  name: string;
  id: number;
  email: string;
  password?: string;
}
interface local extends Auth {
  loggedIn: boolean;
}
interface Res {
  status: string;
  message: string;
  data: Auth;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  private baseUrl = 'https://server.transcoders.run';
  private login = new BehaviorSubject(false);

  checkLogin(): Observable<boolean> {
    console.log('IAM CALEED SUBJECT BEHAVOIR');
    return this.login.asObservable();
  }
  setLogin(val: boolean) {
    this.login.next(val);
  }

  setlocalStorage(data: local) {
    let newData = JSON.stringify(data);
    window.localStorage.setItem('user', newData);
  }
  doLogin(email: string, pass: string) {
    return this.http.get<Res>(
      `${this.baseUrl}/login?email=${email}&password=${pass}`
    );
  }
  doRegister(data: Auth) {
    let headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(data);
    console.log(body);
    return this.http.post<Res>(this.baseUrl + '/register', body, { headers });
  }
  updateUser(id: number, data: any) {
    let headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(data);
    return this.http.put(this.baseUrl + '/user/' + id, body, { headers });
  }
  logout() {
    window.localStorage.removeItem('user');
  }
  getUser() {
    let data = window.localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  canActivate(): boolean {
    let login: local | string | null = window.localStorage.getItem('user');
    if (login) {
      login = JSON.parse(login);
    }
    console.log('HELLLOW  NLJKNKJNKJNK', typeof login);
    if (login !== null && typeof login !== 'string') {
      if (login.loggedIn) {
        this.login.next(true);
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
