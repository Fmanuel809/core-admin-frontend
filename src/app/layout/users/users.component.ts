import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../shared/models/users';
import { UsersService } from '../services/users/users.service';

import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = [];
    constructor(
        private userService: UsersService,
        private translate: TranslateService,
        private toastr: ToastrService
    ) {}

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers () {
        this.userService.getAllUsers().pipe(first()).subscribe((resp) => {
            this.users = resp;
        });
    }

    deleteUser (id: number) {
        this.userService.deleteUser(id).subscribe((res) => {
            this.toastr.success('The user has been deleted', 'Success');
            this.loadAllUsers();
        }, (error) => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
     }

    changeLang(language: string) {
        this.translate.use(language);
    }

}
