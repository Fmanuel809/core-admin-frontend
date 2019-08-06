import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    api = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post(this.api, {username: username, password: password}).subscribe((resp: any) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('auth_token', resp.token);
    });
  }

  logout () {
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
  }

}
