import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import IProduct from 'src/app/interface/IProduct.interface';
import ICart from 'src/app/interface/ICart.interface';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct | undefined;
  public id: number | null = null;
  public amount: number = 1;

  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute,
    private _notificationService: NotificationService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap; //other way
    //const productId = routeParams.get('id');
    this._route.paramMap.subscribe(
      (params) => (this.id = Number(params.get('id')))
    );
    this.product = this._productsService.getOne(Number(this.id));
  }

  public addToCart() {
    const productToCart: ICart = {
      ...this.product!,
      amount: this.amount,
    };
    this._cartService.addCart(productToCart);
    this._notificationService.notificar('Product Added To Cart');
  }
}
