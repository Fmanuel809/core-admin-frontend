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
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('image', product.url_image, product.url_image.name);
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.post(this.apiRoute + '/products', formData, { headers: headers });
    }

    editProduct (id: number, product: Product) {
        const fd = new FormData();
        fd.append('name', product.name);
        fd.append('description', product.description);
        fd.append('image', product.url_image, product.url_image.name);
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('X-Api-Locale', 'en');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.put(this.apiRoute + '/products/' + id, fd, { headers: headers });
    }

    deleteProduct (id: number) {
        let headers: HttpHeaders = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.delete(this.apiRoute + '/products/' + id, { headers: headers });
    }
}
