import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private apiRoute = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }
}
