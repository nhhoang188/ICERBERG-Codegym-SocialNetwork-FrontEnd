import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../services/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comments} from "../model/Comments";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('check1') check1 = true;
  formComment = new FormGroup(
    {content: new FormControl('')}
  );
  @Input() postId: any;
  unknownId: any;
  content: string = '';
  // @ts-ignore
  comments: any;
  data: any = {
    messeger: 'no'
  };
  status = '';
  check: boolean = true;
  count = 0;
  // @ts-ignore
  result: boolean;
  check2=false

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.displayAllComment(this.postId);
    this.unknownId = localStorage.getItem('ID');
  }

  ngOnInit(): void {
    this.creatCommentForm();
    this.activatedRoute.paramMap.subscribe(result => {
      // @ts-ignore
      let currentId: any = result.params.id;
      this.result = this.checkId(this.unknownId, currentId);
    }, error => {
      console.log(error);
    });
    this.displayAllComment(this.postId);
  }



  creatCommentForm() {
    this.formComment = new FormGroup(
      {content: new FormControl('')}
    );
  }

  createComment() {
    //fake data comment object
    let currentDate = new Date();
    // this.unknownId = 3;
    this.content = this.formComment.get('content')?.value;

    let comment: Comments = {
      // @ts-ignore
      userId: this.unknownId,
      //fake data postId
      postId: this.postId,
      content: this.content,
      createDate: currentDate
    };
    this.commentService.createComment(comment).subscribe(
      result => {

        console.log('result', result)
        if (result != null) {
          this.getAll(this.postId);
          this.displayAllComment(this.postId);
          if (JSON.stringify(result) == JSON.stringify(this.data)) {

            this.status = 'Enter your word';
            this.check = false;
          } else {
            this.check = true;
          }
        } else {
          this.status = 'you have not permission';
          this.check = false;
        }
        this.formComment.reset();
      }, error => {
        console.log(error);
      }
    );

  }

  displayAllComment(postId: number) {
    this.commentService.findAllCommentByPostId(postId).subscribe(
      result => {
         this.comments = result;
        // this.count = this.comments.length;

        this.count = result.length;
      }, error => {
        console.log(error);
      }
    )
  }
  getAll(postId: number){
    this.commentService.findAllCommentByPostId(postId).subscribe(
      result => {
        this.check2=!this.check2
        this.comments = result;
      }, error => {
        console.log(error);
      }
    )
  }

  editComment() {

  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(
      result => {
        this.displayAllComment(this.postId);
      }, error => {
        console.log(error);
      }
    );
  }

  checkId(userCurrentId: any, userId: any): boolean {
    if (userCurrentId != userId)
      return false;
    return true;
  }
}
