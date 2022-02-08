import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PractiseComponent } from './practise/practise.component';

@NgModule({
  //decorator ..this provides extra data about this class
  declarations: [
    //this are components which are inside  this module
    AppComponent,
    PractiseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule], //these modules are imported in the current angular project
  providers: [], // for services
  bootstrap: [AppComponent], //which component will be loaded first in memmory from this module
})
export class AppModule {} //App Module
//module is like package
//component is like class + HTML
