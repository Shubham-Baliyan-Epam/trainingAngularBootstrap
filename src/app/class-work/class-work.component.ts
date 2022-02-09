import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-work',
  templateUrl: './class-work.component.html',
  styleUrls: ['./class-work.component.css'],
})
export class ClassWorkComponent implements OnInit {
  constructor() {}
  arr1 = ['Apple', 'Mango', 'Orange', 'Guvava', 'Peach'];
  bool = false;
  ngOnInit(): void {}
  change() {
    this.bool = !this.bool;
  }
}
