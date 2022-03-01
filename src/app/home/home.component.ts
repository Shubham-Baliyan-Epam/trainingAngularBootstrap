import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;

  constructor() {}

  // constructor() {}
  title = 'Nature';
  email = '';
  img1 = './assets/carousel1.jpg';
  img2 = './assets/carousel2.jpg';
  img3 = '../assets/carousel3.jpg';
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  ngOnInit(): void {}
}
