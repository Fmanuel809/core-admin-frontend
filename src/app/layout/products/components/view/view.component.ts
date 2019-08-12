import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/shared/models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
  })
export class ViewComponent implements OnInit {

    product: Product;
    id: number;
    public urlImage: string;
    constructor(
        private translate: TranslateService,
        private route: ActivatedRoute,
        private productService: ProductsService,
        private toastr: ToastrService
    ) {
        this.urlImage = `${environment.apiUrl}/product/image/`;
        this.route.queryParams.subscribe((p) => {
            this.id = this.route.snapshot.params.id;
        });
     }

    ngOnInit() {
        this.productService.getProductById(this.id).pipe(first()).subscribe((resp) => {
            this.product = resp;
        }, (error) => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

}

