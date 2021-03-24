import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';
import {FriendRequest} from '../model/FriendRequest';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  friendRequestNotification: any;
  userCurrentId: any;

  constructor(private notiSv: NotificationService) {
    this.userCurrentId = localStorage.getItem('ID');
    this.getAllNotificationByFriendRequest();
  }

  ngOnInit(): void {
  }

  getAllNotificationByFriendRequest() {
    this.notiSv.getNotiByFriendRequest(this.userCurrentId).subscribe(value => {
      this.friendRequestNotification = value;
      console.log(this.friendRequestNotification);
    });
  }

}
