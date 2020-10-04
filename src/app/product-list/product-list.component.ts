import { Component, OnInit } from '@angular/core';
import { Product } from "../product"
import { ProductService } from "../product-tracklisting/product.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]; 

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(repsonse => this.products = repsonse);
  }

}
