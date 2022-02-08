import { Component } from '@angular/core';

@Component({
  //decorator which provides meta data about the component AppComponent
  selector: 'app-root', //name given to this component
  templateUrl: './app.component.html', //which html is attached to this component
  styleUrls: ['./app.component.css'], // which css is used  for this component
})
export class AppComponent {
  title = 'Nature';
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  // we have used this variables in the html ONE WAY DATA BINDING
}
