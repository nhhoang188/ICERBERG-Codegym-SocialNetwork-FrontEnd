import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../model/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
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
