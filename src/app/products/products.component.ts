import { Component } from '@angular/core';
import { IProduct, products } from '../database/produtos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products: IProduct[] = products;

}
