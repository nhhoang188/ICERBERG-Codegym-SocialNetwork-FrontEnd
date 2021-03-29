import { Component, OnInit } from '@angular/core';
import {LoveService} from '../../../services/love.service';
import {UserService} from '../../../services/user.service';
import {PostService} from '../../../services/post.service';
import {LoveCommentService} from '../../../services/love-comment.service';
import {LoveComment} from '../../../model/LoveComment';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-love-comment',
  templateUrl: './love-comment.component.html',
  styleUrls: ['./love-comment.component.css']
})
export class LoveCommentComponent implements OnInit {
  id_comment=1
  id_user=1
  loveComment: LoveComment ={};
  count_like=0;
  love_comments: any;
  check=false;
  id_love: any;
  constructor(private myService: LoveCommentService, private userService: UserService,private commentService: CommentService) { }

  ngOnInit(): void {
    this.checkLiked(this.id_comment,this.id_user)
  }

  checkLiked(id_comment: number,id_user:number){
    this.myService.getLike(id_comment,id_user).subscribe(value => {
      console.log(value)
      this.countLike(id_comment)
      this.getUserLikeComment(id_comment)
      if(value==null){
        this.check=false;
      }else {
        this.check=true;
        this.id_love=value.id;
      }
    }, error => {
      this.check=false;
    })
  }
  like(id_comment: number,id_user:number){
    this.commentService.findById(id_comment).subscribe(value => {
      // @ts-ignore
      this.loveComment.comment=value;
      console.log(value)
      this.userService.getById(id_user).subscribe(value1 => {
        this.loveComment.user=value1;
        console.log(value1)
        this.myService.create(this.loveComment).subscribe(value2 => {
          console.log(value2)
          this.checkLiked(id_comment,id_user);
        },error => console.log(error));
      },error => console.log(error))
    },error => console.log(error))
  }

  unlike(id_love: number){
    this.myService.delete(id_love).subscribe(value => {
      this.checkLiked(this.id_comment,this.id_user);
    },error => console.log(error))
  }

  countLike(id_comment: number){
    this.myService.countLike(id_comment).subscribe(value => {
      this.count_like=value;
    },error => console.log(error))
  }
  getUserLikeComment(id_comment: number){
    this.myService.getAllByComment(id_comment).subscribe(value => {
      this.love_comments=value;
      console.log(value);
      console.log("wefwef  "+this.love_comments);
    },error => console.log(error))
  }
}
