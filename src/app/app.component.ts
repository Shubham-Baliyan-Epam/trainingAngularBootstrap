import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  //decorator which provides meta data about the component AppComponent
  selector: 'app-root', //name given to this component
  templateUrl: './app.component.html', //which html is attached to this component
  styleUrls: ['./app.component.css'], // which css is used  for this component
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'Quick Deal';
  isLogin!: boolean;
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  name =
    'shubham Baliyan , this string is passed as  attribute to the child component ';
  // we have used this variables in the html ONE WAY DATA BINDING
  checkLogin() {
    console.log('LOLOLOLOL-1');
    this.isLogin = this.authService.canActivate();
    console.log('LOLOLOLOL-2', this.isLogin);
  }
  logout() {
    this.authService.logout();
    // this.isLogin = false;
    this.authService.setLogin(false);
    // this.checkLogin();
    console.log('lllllllllllllllllll');
  }
  ngOnInit() {
    this.authService.checkLogin().subscribe((login) => {
      this.isLogin = login;
      console.log(this.isLogin, login);
    });
    this.authService.canActivate();
  }
  // ngDoCheck() {
  //   // this.checkLogin();
  // }
}
