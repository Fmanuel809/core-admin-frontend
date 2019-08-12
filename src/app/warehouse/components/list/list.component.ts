import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { first } from 'rxjs/operators';

import { Product } from '../../../shared/models/products';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    products: Product[] = [];
    baseUrlImage: string;
    searchProduct = '';
    constructor(private productsService: ProductsService) {
        this.baseUrlImage = `${environment.apiUrl}/product/image/`;
    }

    ngOnInit() {
        this.productsService
            .getAllProducts()
            .pipe(first())
            .subscribe(res => {
                this.products = res;
            });
    }

}
