import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {PostService} from '../../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sweet-memory',
  templateUrl: './sweet-memory.component.html',
  styleUrls: ['./sweet-memory.component.css']
})
export class SweetMemoryComponent implements OnInit {

  user: User = {};
  listPost: any;
  userId: any;

  constructor(private userSv: UserService,
              private postSv: PostService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.getUser();
  }

  ngOnInit(): void {
  }

  getUser() {
    if (localStorage.getItem('USERNAME') != null) {
      this.activatedRoute.paramMap.subscribe(value => {
        const id = value.get('id');
        this.userSv.getById(id).subscribe(value1 => {
          this.user = value1;
          this.getPostByUserId();
        });
      });
    } else {
      this.route.navigate(['login']);
    }
  }

  getPostByUserId() {
    this.postSv.findPostByUserId(this.user.id).subscribe(value => {
      this.listPost = value;
    });
  }

}
