import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductE, ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {}
  product!: ProductE;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      let { id } = params;
      this.productService.getProduct(id).subscribe((res) => {
        console.log(res.data);
        if (res.data && !Array.isArray(res.data)) this.product = res.data;
      });
    });
  }
}
