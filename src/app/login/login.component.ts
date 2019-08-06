import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';

    constructor(
      public router: Router,
      private authService: AuthService
    ) {}

    ngOnInit() {}

    Login() {
        this.authService.login(this.username, this.password);
    }
}
