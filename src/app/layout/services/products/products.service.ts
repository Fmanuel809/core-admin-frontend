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

    createProduct (product: Product) {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.post(this.apiRoute + '/products', {product}, { headers: headers });
    }

    editProduct (id: number, product: Product) {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('X-Api-Locale', 'en');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.put(this.apiRoute + '/products/' + id, {product}, { headers: headers });
    }

    deleteProduct (id: number) {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.delete(this.apiRoute + '/products/' + id, { headers: headers });
    }
}
