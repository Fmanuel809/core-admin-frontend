import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { first } from 'rxjs/operators';

import { Product } from '../../shared/models/products';

import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    public urlImage: string;
    constructor(private productsService: ProductsService, private translate: TranslateService, private toastr: ToastrService) {
        this.urlImage = `${environment.apiUrl}/product/image/`;
    }

    ngOnInit() {
        this.loadProducts();
    }

    deleteProduct (id: number) {
        this.productsService.deleteProduct(id).pipe(first()).subscribe(res => {
            this.toastr.success('The product has been deleted', 'Success');
            this.loadProducts();
        },
        error => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        }
        );
     }

     loadProducts() {
        this.productsService
        .getAllProducts()
        .pipe(first())
        .subscribe(res => {
        this.products = res;
        });
     }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
