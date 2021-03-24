import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friend-post',
  templateUrl: './friend-post.component.html',
  styleUrls: ['./friend-post.component.css']
})
export class FriendPostComponent implements OnInit {
  user: User = {};
  listPost: any;
  userId: any;

  constructor(private userSv: UserService,
              private postSv: PostService,
              private route: Router) {
    this.userId = localStorage.getItem('ID');
    this.userSv.getById(this.userId).subscribe(value => {
      this.user = value;
    });
    this.getPublicAndFriendOnlyPostByUserId();
  }

  ngOnInit(): void {
  }

  getPublicAndFriendOnlyPostByUserId(){
    this.postSv.findPublicAndFriendOnlyPostByUserId(this.userId).subscribe(value => {
      this.listPost = value;
    });
  }

}
