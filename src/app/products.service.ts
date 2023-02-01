import { Injectable } from '@angular/core';
import { IProduct, products } from './database/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public products: IProduct[] = products;

  constructor() { }

  public getAll(){
    return this.products;
  }

  public getOne(productId: number){
    return this.products.find((product) => product.id === productId);
  }
}
