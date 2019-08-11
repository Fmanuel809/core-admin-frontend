import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../../../shared/models/products';
import { ProductsService } from '../../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    public product: Product;
    id: number;

    constructor(private route: ActivatedRoute, private productService: ProductsService,
         private translateService: TranslateService, private toastr: ToastrService) {
        this.product = new Product();
        this.route.queryParams.subscribe(p => {
            this.id = this.route.snapshot.params.id;
        });
    }

    ngOnInit() {
        this.productService.getProductById(this.id).pipe(first()).subscribe((resp) => {
            this.product = resp;
        });
    }

    onSubmit() {
        this.productService
            .createProduct(this.product)
            .pipe(first())
            .subscribe(
                res => {
                    this.toastr.success('The product has been updated', 'Success');
                },
                error => {
                    const errorMsg = error.error;
                    this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
                }
            );
    }

    onReset() {}
}
