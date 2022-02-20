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

  ngOnInit(): void {
    this.products = this.productsService.products;
    this.productsService.getProducts();
  }
}
