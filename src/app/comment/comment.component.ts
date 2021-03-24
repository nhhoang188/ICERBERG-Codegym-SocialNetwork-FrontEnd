import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../services/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
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


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.displayAllComment(this.postId);
    this.unknownId = localStorage.getItem('ID');
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
    // this.unknownId = 1;
    this.content = this.formComment.get('content')?.value;

    let comment: Comment = {
      // @ts-ignore
      userId: this.unknownId,
      //fake data postId
      postId: this.postId,
      content: this.content,
      createDate: currentDate
    };
    this.commentService.createComment(comment).subscribe(
      result => {
        this.displayAllComment(this.postId);
        console.log('result', result);
        if (JSON.stringify(result) == JSON.stringify(this.data)) {

          this.status = 'KO CHO COMMENT';
          this.check = false;
          console.log('check', this.check);
        } else {
          this.check = true;
          console.log('checkduoi', this.check);
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
        this.count = this.comments.length;
      }, error => {
        console.log(error);
      }
    );
  }

}
