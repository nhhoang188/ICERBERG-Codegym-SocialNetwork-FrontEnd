import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-friend-youknow',
  templateUrl: './friend-youknow.component.html',
  styleUrls: ['./friend-youknow.component.css']
})
export class FriendYouknowComponent implements OnInit {
  @Input() idUserCurrent: any;
  listUser: any;

  constructor(private userSv: UserService) {
  }

  ngOnInit(): void {
    this.findUserYouKnow();
  }

  findUserYouKnow() {
    this.userSv.getUserYouKnow(this.idUserCurrent).subscribe(value => {
      this.listUser = value;
    });
  }

}
