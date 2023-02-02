import { Injectable } from '@angular/core';
import  ICart from './interface/ICart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public poductsOnCart: ICart[] = [];  
  constructor() {}

  public getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  public addCart(product: ICart) {
    this.poductsOnCart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.poductsOnCart));
  }

  public clearCart(){
    this.poductsOnCart = [];
    localStorage.clear();
  }

  public removeProductFromCart(productId: number){
    this.poductsOnCart = this.poductsOnCart.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.poductsOnCart));
  }

}
