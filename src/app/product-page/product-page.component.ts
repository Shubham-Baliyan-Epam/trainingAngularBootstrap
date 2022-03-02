import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductE, ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products!: Observable<ProductE[]>;
  constructor(private productsService: ProductServiceService) {}
  range: number = 0;
  rating: number = 5;
  search: string = '';
  electronics: boolean = false;
  mens: boolean = false;
  women: boolean = false;
  kids: boolean = false;
  category!: string;

  ngOnInit(): void {
    this.products = this.productsService.products;
    this.productsService.getProducts();
  }

  setRating(val: number) {
    this.rating = val;
  }
  searchTheProducts() {
    let queryString = '?';
    if (this.category) {
      queryString += 'category=' + this.category + '&';
    }
    if (this.range > 0) {
      queryString += 'price_lte=' + this.range + '&';
    }
    if (this.search) {
      queryString += 'name_iLike=%' + this.search + '%' + '&';
    }
    if (this.rating) {
      queryString += 'rating=' + this.rating;
    }
    if (queryString.length > 1) {
      this.productsService.getProducts(queryString);
    }
  }
  resetProducts() {
    this.search = '';
    this.category = '';
    this.range = 0;
    this.productsService.getProducts();
  }
}
