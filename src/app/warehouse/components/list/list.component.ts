import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { first } from 'rxjs/operators';

import { Product } from '../../../shared/models/products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    products: Product[] = [];
  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
    this.productsService
    .getAllProducts()
    .pipe(first())
    .subscribe(res => {
        this.products = res;
    });
  }

}
