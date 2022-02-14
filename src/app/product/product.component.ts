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
  editName!: string;
  addForm = false;
  editPrice!: number;
  editDiscount!: number;
  editCategory!: string;
  editId!: number;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.productsArray;
  }
  changeForm() {
    this.addForm = true;
  }
  show() {
    console.log(this.products);
  }
  deleteProd(id: number) {
    this.productService.deleteProduct(id);
  }
  edit(id: number) {
    this.addForm = false;
    console.log(this.productService.getSingleProduct(id));
    let EditProduct = this.productService.getSingleProduct(id);
    this.editCategory = EditProduct?.category;
    this.editName = EditProduct.name;
    this.editPrice = EditProduct.price;
    this.editDiscount = EditProduct.discount;
    this.editId = id;
  }
  resetData() {
    this.editId = -1;
    this.editCategory = '';
    this.editName = '';
    this.editDiscount = 0;
    this.editPrice = 0;
  }
  onEditSubmit() {
    let data = {
      id: this.editId,
      name: this.editName,
      price: this.editPrice,
      discount: this.editDiscount,
      category: this.editCategory,
    };
    this.productService.updateproduct(this.editId, data);
    this.resetData();
  }
  addProduct() {
    let id = Math.floor(Math.random() * 10 + 4);
    let data = {
      id,
      name: this.editName,
      price: this.editPrice,
      discount: this.editDiscount,
      category: this.editCategory,
    };
    this.productService.addSingleProduct(data);
    this.resetData();
  }
}
