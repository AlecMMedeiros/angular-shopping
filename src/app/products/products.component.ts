import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import IProduct from '../interface/IProduct.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
public products!: IProduct[];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const products = this.productService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const description = params.get('description')?.toLowerCase();

      if(description) {
        this.products = products.filter((elem) => elem.description.toLowerCase().includes(description));
        return;
      }
      this.products = products;
    })
  }
}
