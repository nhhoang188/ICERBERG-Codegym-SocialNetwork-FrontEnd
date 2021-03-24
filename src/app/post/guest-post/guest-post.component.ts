import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guest-post',
  templateUrl: './guest-post.component.html',
  styleUrls: ['./guest-post.component.css']
})
export class GuestPostComponent implements OnInit {
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
    this.getPublicPostByUserId();
  }

  ngOnInit(): void {
  }


  getPublicPostByUserId(){
    this.postSv.findPublicPostByUserId(this.userId).subscribe(value => {
      this.listPost = value;
    });
  }

}
