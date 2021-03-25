import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-comment',
  templateUrl: './edit-detail-comment.component.html',
  styleUrls: ['./edit-detail-comment.component.css']
})
export class EditDetailCommentComponent implements OnInit {

  comments: Comment[] = [];
  // fake postId
  postId = 2;

  constructor(private commentService: CommentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDataComment();
  }

  getDataComment() {
    this.commentService.findAllCommentByPostId(this.postId).subscribe(
      result => {
        this.comments = result;
        console.log(this.comments);
      }, error => {
        console.log(error);
      }
    );
  }
}
