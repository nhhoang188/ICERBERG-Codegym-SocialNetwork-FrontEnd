import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-info-noti',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponentNoti implements OnInit {

  @Input() IdUserCmt: any;
  @Input() createDateCmt: any;
  user: User = {};
  constructor(private userSv: UserService) {
  }

  ngOnInit(): void {
    this.findUserInforByCmtId();
  }

  findUserInforByCmtId() {
    this.userSv.getById(this.IdUserCmt).subscribe(value => {
      this.user = value;
      console.log(value);
    });
  }
}
