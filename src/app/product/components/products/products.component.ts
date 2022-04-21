import { Component, OnInit } from '@angular/core';
import { Product} from './../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  
  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit() {
    this.fecthProducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  fecthProducts(){
    this.ProductsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }
  

}
