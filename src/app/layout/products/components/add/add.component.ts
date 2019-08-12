import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../../../shared/models/products';
import { ProductsService } from '../../../services/products/products.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    public product: Product;

    constructor(
        private translate: TranslateService,
        private productsService: ProductsService,
        private toastr: ToastrService
        ) {
        this.product = new Product;
    }

    ngOnInit() {}

    onSubmit() {
        this.productsService.createProduct(this.product).pipe(first()).subscribe((res) => {
            this.toastr.success('The product has been created', 'Success');
        }, (error) => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

    onReset() {}
}
