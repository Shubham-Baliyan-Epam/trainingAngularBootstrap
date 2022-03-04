import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustDirectiveDirective } from './cust-directive.directive';
import { ProductComponent } from './product/product.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
@NgModule({
  //decorator ..this provides extra data about this class
  declarations: [
    //this are components which are inside  this module
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CustomPipePipe,
    CustDirectiveDirective,
    ProductComponent,
    ProductPageComponent,
    TodayDealsComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    MyorderComponent,
    MyprofileComponent,
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ], //these modules are imported in the current angular project
  providers: [], // for services
  bootstrap: [AppComponent], //which component will be loaded first in memmory from this module
})
export class AppModule {} //App Module
//module is like package
//component is like class + HTML
