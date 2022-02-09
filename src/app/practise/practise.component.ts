import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css'],
})
export class PractiseComponent implements OnInit {
  constructor() {}
  phone = '';
  email = '';
  pass = '';
  message = '';
  user = {
    name: 'shubham',
    age: 23,
    interest: 'Swimming',
    temperature: '12deg',
    location: 'Rajendra Nagar',
    game: 'Valorant',
  };
  ngOnInit(): void {}
  checkPhoneNumber() {
    if (this.phone.length === 10) {
      this.message = 'good Mobile no';
    } else this.message = 'mobile length should be 10 ';
  }
  checkEmail() {
    if (this.pass === 'Admin') alert('logged in');
    else alert('wrong password');
  }
}
