import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { faCartShopping } from'@fortawesome/free-solid-svg-icons'
import * as brands from "@fortawesome/free-brands-svg-icons"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faCartShopping = faCartShopping; 
  brands = brands;
  constructor(public cartService: CartService) {}

}
