import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {
  @Input() userId: any;
  user: User = {};

  constructor(private userSv: UserService) {

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userSv.getById(this.userId).subscribe(value => {
      this.user = value;
    });
  }
}
