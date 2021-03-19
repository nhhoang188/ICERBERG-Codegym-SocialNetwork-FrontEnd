import { Component, OnInit } from '@angular/core';

import {LoveService} from '../../services/love.service';
import {Love} from '../../model/Love';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
// @ts-ignore
import {Post} from '../../model/Post';
import {User} from '../../model/User';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {

  id_user: any;
  id_post: any;
  checkLike: any;
  love: Love={}
  post: Post={}
  user: User={}
  id_love: any;
  count_like: any=0;
  constructor(private myService: LoveService, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.checkLiked(this.id_post,this.id_user)
  }

  checkLiked(id_post: number,id_user:number){
    this.myService.getLike(id_post,id_user).subscribe(value => {
      this.countLike(id_post)
      if(value==null){
        this.checkLike=false;
      }else {
        this.checkLike=true;
        this.id_love=value.id;
      }
    }, error => {
      this.checkLike=false;
    })
  }
  like(id_post: number,id_user:number){
    this.postService.findPostById(id_post).subscribe(value => {
      this.love.post=value;
      console.log(value)
      this.userService.getById(id_user).subscribe(value1 => {
        this.love.user=value1;
        console.log(value1)
        this.myService.create(this.love).subscribe(value2 => {
          console.log(value2)
          this.checkLiked(id_post,id_user);
        },error => console.log(error));
      },error => console.log(error))
    },error => console.log(error))
  }

  unlike(id_love: number){
    this.myService.delete(id_love).subscribe(value => {
      this.checkLiked(this.id_post,this.id_user);
      },error => console.log(error))
  }

  countLike(id_post: number){
    this.myService.countLike(id_post).subscribe(value => {
      this.count_like=value;
    },error => console.log(error))
  }

}
