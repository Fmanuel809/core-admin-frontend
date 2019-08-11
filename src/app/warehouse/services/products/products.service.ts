import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Product } from '../../../shared/models/products';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiRoute = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {}

    getAllProducts () {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get<Product[]>(this.apiRoute + '/products', { headers: headers });
    }

    getProductById (id: number) {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get<Product>(this.apiRoute + '/products/' + id, { headers: headers });
    }
}
