import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

import { Observable } from 'rxjs';
import { Product} from './../../../product.model'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;


  constructor(
    private cartServices: CartService
  ) { 
    this.products$ = this.cartServices.cart$;
  }

  ngOnInit() {
  }

}
