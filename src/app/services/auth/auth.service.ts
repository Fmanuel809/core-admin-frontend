import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api = `${environment.apiUrl}`;

    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        this.http.post(this.api + '/auth/login', { username: username, password: password }).subscribe((resp: any) => {
            localStorage.setItem('auth_token', resp.token);
            this.getCurrentUser();
            setTimeout(() => {
                this.router.navigate(['dashboard']);
            }, 300);
        });
    }

    logout() {
        localStorage.removeItem('auth_token');
    }

    getCurrentUser() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));

        this.http.get(this.api + '/getUserActive', { headers: headers }).subscribe((resp: any) => {
            sessionStorage.setItem('current_user', JSON.stringify(resp));
        });
    }

    public get logIn(): boolean {
        return (localStorage.getItem('token') !== null);
    }

}
