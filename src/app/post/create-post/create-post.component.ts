import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postStatusForm: any;
  content: any;
  date: any;
  privacy = 'public';

  // fake userId
  userId: any;

  constructor(private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.postStatusForm = new FormGroup({
      content: new FormControl('')
    })

  }

  onPost() {
    let status = this.createPost();

    this.postService.createStatusPost(status).subscribe(result => {
      alert('success!!!');
      this.postStatusForm.reset
      this.router.navigate(['/create-post']);
    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  createDate(): Date {
    let currentDate = new Date();
    return currentDate;
  }

  createPost(): Post {
    let post: Post = <Post>{};
    post.userId = this.userId = 1;
    post.content = this.postStatusForm.get('content').value;
    post.createDate = this.createDate();
    post.privacy = this.privacy;

    console.log('Date' + post.createDate);

    return post;
  }
}
