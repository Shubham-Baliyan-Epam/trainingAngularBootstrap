import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private setlocalStorage() {
    window.localStorage.setItem('login', 'true');
  }
  login(email: string, pass: string): string {
    if (email === 'admin@gmail.com' && pass === 'admin1234') {
      this.setlocalStorage();
      return 'User logged in successfully';
    }
    return 'Wrong email and password';
  }
  logout() {
    window.localStorage.removeItem('login');
  }

  checkIfUserLoggedIn(): boolean {
    let login = window.localStorage.getItem('login');
    if (login) {
      return true;
    }
    return false;
  }
}
