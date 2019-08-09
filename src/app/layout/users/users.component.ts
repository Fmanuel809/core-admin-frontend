import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../shared/models/users';
import { UsersService } from '../services/users/users.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = []
    constructor(private userService: UsersService, private translate: TranslateService) {}

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers () {
        this.userService.getAllUsers().pipe(first()).subscribe((resp) => {
            this.users = resp;
        });
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

}
