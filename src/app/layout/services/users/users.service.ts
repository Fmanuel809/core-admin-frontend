import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private apiRoute = `${environment.apiUrl}/getUserActive`;

  constructor(private http: HttpClient) { }

  getCurrentUser () {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));

      this.http.get(this.apiRoute, {headers: headers}).subscribe((resp: any) => {
          sessionStorage.setItem('current_user', JSON.stringify(resp));
      });
  }
}
