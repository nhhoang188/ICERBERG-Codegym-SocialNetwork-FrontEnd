import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  user: User = {};
  listPost: any;
  userId: any;
  // @ts-ignore
  result: boolean;

  constructor(private userSv: UserService,
              private postSv: PostService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.getUser();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(result=>{
      // @ts-ignore
      let currentId: any = result.params.id;
      this.result = this.checkId(localStorage.getItem('ID'), currentId);
    }, error => {
      console.log(error);
    });
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

  deletePost(id?: any) {
    this.postSv.deletePostById(id).subscribe(() => {
      alert('Delete Ok!');
      this.getPostByUserId();
    });
  }
  checkId(userCurrentId: any, userId: any): boolean {
    if (userCurrentId != userId)
      return false;
    return true;
  }
}
