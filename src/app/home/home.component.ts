import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Hello hi', 'undo', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  // constructor() {}
  title = 'Nature';
  email = '';
  img1 = './assets/carousel1.jpg';
  img2 = './assets/carousel2.jpg';
  img3 = '../assets/carousel3.jpg';
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  ngOnInit(): void {}
}
