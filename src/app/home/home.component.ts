import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  title = 'Nature';
  email = '';
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  ngOnInit(): void {}
}
