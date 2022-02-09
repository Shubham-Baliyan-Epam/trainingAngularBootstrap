import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-comp',
  templateUrl: './ng-style-comp.component.html',
  styleUrls: ['./ng-style-comp.component.css'],
})
export class NgStyleCompComponent implements OnInit {
  constructor() {}
  color = '';
  fontSize = '';

  ngOnInit(): void {}
}
