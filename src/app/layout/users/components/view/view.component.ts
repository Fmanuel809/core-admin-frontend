import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/models/users';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    user: User;
    id: number;

    constructor(
        private translate: TranslateService,
        private route: ActivatedRoute,
        private userService: UsersService,
        private toastr: ToastrService
    ) {
        this.route.queryParams.subscribe((p) => {
            this.id = this.route.snapshot.params.id;
        });
     }

    ngOnInit() {
        this.userService.getUserById(this.id).pipe(first()).subscribe((resp) => {
            this.user = resp;
        }, (error) => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

}
