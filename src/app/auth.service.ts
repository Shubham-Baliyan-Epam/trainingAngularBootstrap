import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
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
  canActivate(): boolean {
    let login = window.localStorage.getItem('login');
    if (login) {
      login = JSON.parse(login);
    }
    console.log('HELLLOW  NLJKNKJNKJNK', typeof login);
    if (login) {
      console.log('HELLLOW  ewnrjnjkwenkjnkn', login);

      return true;
    }
    console.log('jsndjnsjdnjknskdjknk');
    this.router.navigate(['/']);
    return false;
  }
}
