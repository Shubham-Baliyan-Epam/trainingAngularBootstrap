import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { PopupService } from '../popup.service';
import { ProductE, ProductServiceService } from '../product-service.service';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private wishListService: WishListService,
    private popupService: PopupService
  ) {}
  product!: ProductE;
  cart!: { products: ProductE[] };
  addToCart(product: ProductE) {
    this.cartService.setCart(product);
    this.popupService.setMessage('Product added to Bag');
  }
  addToWishList(product: ProductE) {
    this.popupService.setMessage('Product added to WishList');
    this.wishListService.setWishList(product);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      let { id } = params;
      this.cartService.checkCart().subscribe((cart) => {
        this.cart = cart;
        console.log(cart, 'HI HI HI');
      });
      this.productService.getProduct(id).subscribe((res) => {
        console.log(res.data);
        if (res.data && !Array.isArray(res.data)) this.product = res.data;
      });
    });
  }
}
