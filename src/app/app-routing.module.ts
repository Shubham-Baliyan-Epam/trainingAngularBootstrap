import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SingleProductComponent } from './single-product/single-product.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent, pathMatch: 'full' },

  { path: 'products', component: ProductPageComponent, pathMatch: 'full' },
  { path: 'myorders', component: MyorderComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  {
    path: 'checkout',
    component: CheckoutComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'products/:id',
    component: SingleProductComponent,
    pathMatch: 'full',
  },

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
