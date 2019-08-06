import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

    public name: string;
    public username: string;
    public email: string;
    public created_at: string;
    public updated_at: string;
  constructor(
      private userInfo: UsersService,
  ) { }

  ngOnInit() {
      this.userInfo.getCurrentUser();
      const currentUser = JSON.parse(sessionStorage.getItem('current_user'));
      this.name = currentUser.name;
      this.username = currentUser.username;
      this.email = currentUser.email;
      this.created_at = currentUser.created_at;
      this.updated_at = currentUser.updated_at;
  }

}
