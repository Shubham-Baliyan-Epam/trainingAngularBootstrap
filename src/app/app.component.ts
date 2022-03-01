import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Cart, CartService } from './cart.service';
import { WishList, WishListService } from './wish-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupService } from './popup.service';

@Component({
  //decorator which provides meta data about the component AppComponent
  selector: 'app-root', //name given to this component
  templateUrl: './app.component.html', //which html is attached to this component
  styleUrls: ['./app.component.css'], // which css is used  for this component
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private wishListService: WishListService,
    private activatedRoute: ActivatedRoute,
    private popupService: PopupService,
    private _snackBar: MatSnackBar
  ) {}
  title = 'Quick Deal';
  cart!: Cart;
  wishList!: WishList;
  isLogin!: boolean;
  user = { name: 'shubham Baliyan', email: 'shubham_baliyan@epam.com' };
  name =
    'shubham Baliyan , this string is passed as  attribute to the child component ';
  // we have used this variables in the html ONE WAY DATA BINDING
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  checkLogin() {
    console.log('LOLOLOLOL-1');
    this.isLogin = this.authService.canActivate();
    console.log('LOLOLOLOL-2', this.isLogin);
  }
  logout() {
    this.authService.logout();
    // this.isLogin = false;
    this.authService.setLogin(false);
    // this.checkLogin();
    console.log('lllllllllllllllllll');
  }
  ngOnInit() {
    this.authService.checkLogin().subscribe((login) => {
      this.isLogin = login;
      console.log(this.isLogin, login);
    });
    this.activatedRoute.url.subscribe((url) =>
      console.log(url, '===================')
    );
    this.authService.canActivate();
    this.cartService.getLocalStorage();
    this.cartService.checkCart().subscribe((cart) => (this.cart = cart));
    this.wishListService
      .checkWishList()
      .subscribe((wishList) => (this.wishList = wishList));
    this.popupService.checkString().subscribe((val) => {
      if (val.length) this.openSnackBar(val);
    });
  }
  // ngDoCheck() {
  //   // this.checkLogin();
  // }
}
