import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Comments} from "../../model/Comments";

@Component({
  selector: 'app-delete-comment',
  templateUrl: './edit-detail-comment.component.html',
  styleUrls: ['./edit-detail-comment.component.css']
})
export class EditDetailCommentComponent implements OnInit {

  // @ts-ignore
  comment: Comments;
  commentId: any;
  postId: any;
  content: string = "";
  userIdCurrent = localStorage.getItem('ID');
  formEditComment: FormGroup = new FormGroup({
    content: new FormControl('')
  });

  constructor(private commentService: CommentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      async result => {
        this.postId = result.get('postId');
        this.commentId = result.get('commentId');
        this.comment = await this.getDataComment(this.postId, this.commentId);
        this.formEditComment.get('content')?.setValue(this.comment.content);

      }
    );


  }

  getDataComment(postId: any, commentId: any) {
    return this.commentService.findCommentByCommentId(postId, commentId).toPromise()
  }

  editComment() {
    this.content = this.formEditComment.get('content')?.value;
    let comment: Comments = {
      commentId: this.comment.commentId,
      userId: this.comment.userId,
      postId: this.comment.postId,
      content: this.content,
      createDate: this.comment.createDate
    }
    this.commentService.updateComment(this.commentId, comment).subscribe(
      result => {
        this.router.navigate([`profile/${this.userIdCurrent}`])
      }, error => {
        console.log(error);
      }
    );
  }


}
