import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { MustMatch } from '../../validators/match-pass.validator';
import { UsersService } from '../../../services/users/users.service';
import { User } from 'src/app/shared/models/users';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    editForm: FormGroup;
    submitted = false;
    user: User;
    id: number;
    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,
        private userService: UsersService,
        private route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe((p) => {
            this.id = this.route.snapshot.params.id;
        });

        this.loadUser();
    }

    ngOnInit() {
        const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/gm;
        this.editForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(regx)]],
            confirmPassword: ['', Validators.required],
            is_admin: ['']
        },
            {
                validators: MustMatch('password', 'confirmPassword')
            }
        );
    }

    ngAfterViewInit() {
        this.editForm.value.name = 'prueba';
        console.log(this.editForm);
    }

    loadUser() {
        this.userService.getUserById(this.id).pipe(first()).subscribe((resp) => {
            this.user = resp;
        }, (error) => {
            const errorMsg = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

    get f() { return this.editForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.editForm.invalid) {
            this.toastr.error('There are invalid fields in the form.', 'Form errors');
            return;
        }
        // display form values on success
        const data = this.editForm.value;
        const user: User = {
            'name': data.name,
            'username': data.username,
            'email': data.email,
            'password': data.password,
            'is_admin': (data.is_admin === true) ? 1 : 0
        };

        this.userService.updateUser(this.id, user).subscribe((res: any) => {
            this.toastr.success('A new user has been created.', 'Success');
            this.submitted = false;
            this.editForm.reset();
        }, (error: any) => {
            console.log(error);
            const errorMsg: any = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

    onReset() {
        this.submitted = false;
        this.editForm.reset();
    }

}
