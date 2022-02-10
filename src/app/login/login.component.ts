import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}
  login = true;
  show = false;
  users = [
    {
      usid: 'shubham',
      pass: '12345',
    },
  ];
  string = '';

  email = '';
  pass = '';
  closeAlert() {
    this.show = false;
  }
  addToUsers() {
    console.log(this.email, this.pass);
    this.show = true;
    this.users.push({ usid: this.email, pass: this.pass });
    this.login = true;
    this.email = '';
    this.pass = '';
    this.string = 'User registerd successfully';
    console.log(this.users);
  }
  checkLogin() {
    let data = this.users.find((item) => item.usid === this.email);
    if (data) {
      if (this.pass === data.pass) {
        this.string = 'logged in successfully';
        this.show = true;
        this.email = '';
        this.pass = '';
        this.route.navigate(['/empTable/true']);
        return;
      }
    }
    this.string = 'Email or password is wrong';
    this.show = true;
    this.email = '';
    this.pass = '';
  }
  ngOnInit(): void {}
  change() {
    this.login = !this.login;
  }
}
