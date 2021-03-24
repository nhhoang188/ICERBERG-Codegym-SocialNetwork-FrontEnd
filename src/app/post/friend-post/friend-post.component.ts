import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FriendrequestService} from "../../services/friendrequest.service";

@Component({
  selector: 'app-friend-post',
  templateUrl: './friend-post.component.html',
  styleUrls: ['./friend-post.component.css']
})
export class FriendPostComponent implements OnInit {
  user: User = {};
  listPost: any;
  userId1: any;
  userId2: any;
  checkFriend: any;

  constructor(private userSv: UserService,
              private postSv: PostService,
              private friendSv: FriendrequestService,
              private activeRoute: ActivatedRoute,
              private route: Router) {
    this.userId1 = localStorage.getItem('ID');
    console.log("id nguoi dung" + this.userId1);
    this.userSv.getById(this.userId1).subscribe(value => {
      this.user = value;
      this.activeRoute.paramMap.subscribe(value => {
        this.userId2 = value.get('userId');
        console.log(this.userId2)
        this.friendSv.getFriend(this.userId1, this.userId2).subscribe(value => {
          if (value == null) {
            this.checkFriend = false;
          } else {
            this.checkFriend = value.stt;
          }
          this.checkFri();
        }, error => console.log(error))
      });
    });
  }

  checkFri() {
    if (this.checkFriend == true) {
      this.getPublicAndFriendOnlyPostByUserId();
    }
    if (this.checkFriend == false) {
      this.getPublicPostByUserId();
    } else {
      console.log("ko co bai viet");
    }
  }
  ngOnInit(): void {
  }


  getPublicAndFriendOnlyPostByUserId() {
    this.postSv.findPublicAndFriendOnlyPostByUserId(this.userId2).subscribe(value => {
      this.listPost = value;
    });
  }

  getPublicPostByUserId() {
    this.postSv.findPublicPostByUserId(this.userId2).subscribe(value => {
      this.listPost = value;
    });
  }

}
