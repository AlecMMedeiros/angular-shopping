import { Component, OnInit } from '@angular/core';
import { IProduct, products } from '../database/produtos';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
public products!: IProduct[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
