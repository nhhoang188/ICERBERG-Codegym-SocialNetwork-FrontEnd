import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  friendRequestNotification: any;
  cmtOfMyPostNotification: any;
  loveOfMyPostNotification: any;
  userCurrentId: any;

  constructor(private notiSv: NotificationService) {
    this.userCurrentId = localStorage.getItem('ID');
    this.getAllNotificationByFriendRequest();
    this.getAllNotificationByCmtOfMyPost();
    this.getAllNotificationByLoveOfMyPost();
  }

  ngOnInit(): void {
  }

  getAllNotificationByFriendRequest() {
    this.notiSv.getNotiByFriendRequest(this.userCurrentId).subscribe(value => {
      this.friendRequestNotification = value;
    });
  }

  getAllNotificationByCmtOfMyPost() {
    this.notiSv.getNotiByCmtOfMyPost(this.userCurrentId).subscribe(value => {
      this.cmtOfMyPostNotification = value;
    });
  }

  getAllNotificationByLoveOfMyPost() {
    this.notiSv.getNotiByLoveOfMyPost(this.userCurrentId).subscribe(value => {
      this.loveOfMyPostNotification = value;
    });
  }
}
