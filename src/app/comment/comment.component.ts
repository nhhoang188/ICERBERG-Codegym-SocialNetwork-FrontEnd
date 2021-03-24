import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../services/comment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  formComment = new FormGroup(
    {content: new FormControl('')}
  )
  postId = 2;
  unknownId: number = 0;
  content: string = '';
  // @ts-ignore
  comments: any
  data: any = {
    messeger: "no"
  }
  status = "";
  check: boolean = true;
  count = 0;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.displayAllComment(this.postId);
  }

  ngOnInit(): void {
    this.creatCommentForm();

  }


  creatCommentForm() {
    this.formComment = new FormGroup(
      {content: new FormControl('')}
    );
  }

  createComment() {
    //fake data comment object
    let currentDate = new Date();
    this.unknownId = 3;
    this.content = this.formComment.get('content')?.value;

    let comment: Comment = {
      // @ts-ignore
      userId: this.unknownId,
      //fake data postId
      postId: 2,
      content: this.content,
      createDate: currentDate
    }
    this.commentService.createComment(comment).subscribe(
      result => {

        console.log('result', result)
        if (result != null) {
          this.displayAllComment(this.postId);
          if (JSON.stringify(result) == JSON.stringify(this.data)) {

            this.status = 'KO CHO COMMENT';
            this.check = false;
          } else {
            this.check = true;
          }
        } else {
          this.status = 'KO CHO COMMENT';
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
        this.count = result.length;
        this.comments = result;

        console.log(this.comments);
      }, error => {
        console.log(error);
      }
    )
  }

}
