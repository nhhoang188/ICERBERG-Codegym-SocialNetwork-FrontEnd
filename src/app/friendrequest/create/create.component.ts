import { Component, OnInit } from '@angular/core';
import {FriendRequest, User} from '../../model/FriendRequest';
import {FriendrequestService} from '../../service/friendrequest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user1 : User={id: 1,username: '1', password: '1'}
  user2 : User={id: 3,username: '3', password: '3'}
  requess: FriendRequest={};
  constructor(private myService: FriendrequestService,
              private router: Router) { }

  ngOnInit(): void {
  }

  add(user_send: User,user_rec: User){
    this.requess.userSender=user_send;

    this.requess.userReceiver=user_rec;
    console.log(this.requess)
    this.myService.create(this.requess)
  }
}
