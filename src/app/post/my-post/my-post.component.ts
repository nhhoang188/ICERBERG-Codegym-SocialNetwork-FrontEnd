import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  user: User = {};
  listPost: any;
  userId: any;

  constructor(private userSv: UserService,
              private postSv: PostService) {
    this.userId =localStorage.getItem('ID');
    this.userSv.getById(this.userId).subscribe(value => {
      this.user = value;
    });
    this.postSv.findPostByUserId(this.userId).subscribe(value => {
      this.listPost = value;
    });
  }

  ngOnInit(): void {
  }


}
