import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { MustMatch } from '../../validators/match-pass.validator';
import { UsersService } from '../../../services/users/users.service';
import { User } from 'src/app/shared/models/users';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,
        private userService: UsersService
    ) { }
    ngOnInit() {
        const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/gm;
        this.registerForm = this.formBuilder.group({
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

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.toastr.error('There are invalid fields in the form.', 'Form errors');
            return;
        }
        // display form values on success
        const data = this.registerForm.value;
        const user: User = {
            'name': data.name,
            'username': data.username,
            'email': data.email,
            'password': data.password,
            'is_admin': (data.is_admin === true) ? 1 : 0
        };

        this.userService.createUser(user).subscribe((res: any) => {
            this.toastr.success('A new user has been created.', 'Success');
            this.submitted = false;
            this.registerForm.reset();
        }, (error: any) => {
            console.log(error);
            const errorMsg: any = error.error;
            this.toastr.error(errorMsg.error, 'Error ' + error.status + ': ' + error.statusText);
        });
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}
