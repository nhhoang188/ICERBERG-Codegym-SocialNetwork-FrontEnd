import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userPublic: any;
  guest: any;
  listPost: any;

  constructor(private router: Router,
              private userSv: UserService,
              private activatedRoute: ActivatedRoute,
              private postSv: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      const id = value.get('id');
      if (localStorage.getItem('USERNAME') != null) {
        this.userSv.getById(id).subscribe(value1 => {
          this.user = value1;
          this.getPostByUserId();
        });
      } else {
        this.userSv.getByIdAndInfoPublic(id).subscribe(value1 => {
          this.guest = value1;
        });
      }
    });
  }

  getPostByUserId() {
    this.postSv.findPostByUserId(this.user.id).subscribe(value => {
      this.listPost = value;
    });
  }
}
