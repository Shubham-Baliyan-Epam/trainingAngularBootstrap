import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PractiseComponent } from './practise/practise.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NgStyleCompComponent } from './ng-style-comp/ng-style-comp.component';
import { EmpRecordComponent } from './emp-record/emp-record.component';
import { ClassWorkComponent } from './class-work/class-work.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  //decorator ..this provides extra data about this class
  declarations: [
    //this are components which are inside  this module
    AppComponent,
    PractiseComponent,
    HomeComponent,
    ChildComponent,
    NgStyleCompComponent,
    EmpRecordComponent,
    ClassWorkComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule], //these modules are imported in the current angular project
  providers: [], // for services
  bootstrap: [AppComponent], //which component will be loaded first in memmory from this module
})
export class AppModule {} //App Module
//module is like package
//component is like class + HTML
