import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import ICart from '../interface/ICart.interface';
import { NotificationService } from '../notification.service';
import * as faSolid from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsOnCart: ICart[] = [];
  total: number = 0;
  faSolid = faSolid;


  constructor(
    public cartService: CartService,
    private _notificationService: NotificationService,
    private _router: Router,
    ) {}

  ngOnInit(): void {
    this.productsOnCart = this.cartService.getCart();
    this.getTotalPrice();
  }

  public removeProduct(productId: number){
    this.productsOnCart = this.productsOnCart.filter((product) => product.id !== productId)
    this.cartService.removeProductFromCart(productId);
    this.getTotalPrice();
  }

  public getTotalPrice(){
    this.total = this.productsOnCart.reduce((prev, curr) => prev + (curr.price * curr.amount), 0 )
  }

  public toBuy(){
    this._notificationService.notificar('Purchase Completed Successfully');
    this.cartService.clearCart();
    this._router.navigate(['products'])
  }
}
