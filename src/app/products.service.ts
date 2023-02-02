import { Injectable } from '@angular/core';
import { products } from './database/produtos';
import IProduct from './interface/IProduct.interface';

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
