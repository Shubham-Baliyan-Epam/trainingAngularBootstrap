import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/productClass';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: Observable<Product[]>;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.productsArray;
  }
  show() {
    console.log(this.products);
  }
  deleteProd() {
    this.productService.deleteProduct(1);
  }
}
