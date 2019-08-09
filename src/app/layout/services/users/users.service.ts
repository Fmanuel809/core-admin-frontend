import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { User } from '../../../shared/models/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private apiRoute = `${environment.apiUrl}`;

    constructor(private http: HttpClient) { }

    getAllUsers() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.get<User[]>(this.apiRoute + '/users', { headers: headers });
    }

    getUserById(id: number) {
        //return this.http. ;
    }

    createUser (user: User) {
        //return this.http. ;
    }

    updateUser (user: User) {
        //return this.http. ;
    }

    deleteUser (id: number) {
        //return this.http. ;
    }

}
