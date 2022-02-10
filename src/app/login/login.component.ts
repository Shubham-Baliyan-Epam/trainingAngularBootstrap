import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  login = true;
  users = [
    {
      usid: 'shubham',
      pass: '12345',
    },
  ];
  ngOnInit(): void {}
  change() {
    this.login = !this.login;
  }
}
