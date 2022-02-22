import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductE, ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-today-deals',
  templateUrl: './today-deals.component.html',
  styleUrls: ['./today-deals.component.css'],
})
export class TodayDealsComponent implements OnInit {
  products!: Observable<ProductE[]>;
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.productService.getProducts('?_limit=4');
  }
}
