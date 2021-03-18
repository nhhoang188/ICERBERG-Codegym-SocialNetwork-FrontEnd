import {Component, OnInit} from '@angular/core';
// import {Post} from '../model/post';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postStatus: any;

  constructor(private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.postStatus = new FormGroup({
      content: new FormControl('')
    })

  }

  onPost() {

  }
}
