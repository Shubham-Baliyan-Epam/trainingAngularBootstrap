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
  title = 'Nature';
  isLogin: boolean = false;
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  name =
    'shubham Baliyan , this string is passed as  attribute to the child component ';
  // we have used this variables in the html ONE WAY DATA BINDING
  checkLogin() {
    console.log('LOLOLOLOL');
    this.isLogin = this.authService.checkIfUserLoggedIn();
  }
  logout() {
    this.authService.logout();
    this.checkLogin();
  }
  ngOnInit() {
    this.checkLogin();
  }
}
