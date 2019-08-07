import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: []
})
export class LoginComponent implements OnInit {

    @Input() username: string;
    @Input() password: string;

    constructor(
      public router: Router,
      private authService: AuthService,
      private spinner: NgxSpinnerService
    ) {}

    ngOnInit() { }

    Login() {
        this.spinner.show(undefined,
            {
                size: 'medium'
            }
        );
        this.authService.login(this.username, this.password);
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
}
