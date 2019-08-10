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
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.get<User>(this.apiRoute + '/users/' + id, { headers: headers});
    }

    createUser (user: User) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.post(this.apiRoute + '/users', user, { headers: headers });
    }

    updateUser (id: number, user: User) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.put(this.apiRoute + '/users/' + id, user, { headers: headers });
    }

    deleteUser (id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', localStorage.getItem('auth_token'));
        return this.http.delete(this.apiRoute + '/users/' + id, { headers: headers });
    }

}
