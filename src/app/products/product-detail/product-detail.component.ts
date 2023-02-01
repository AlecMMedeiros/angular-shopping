import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/database/produtos';
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
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap; //other way
    //const productId = routeParams.get('id');
    this.route.paramMap.subscribe(
      (params) => (this.id = Number(params.get('id')))
    );
    this.product = this.productsService.getOne(Number(this.id));
  }

  public addToCart(){
    this.notificationService.notificar("Product Added To Cart")
  }
}
