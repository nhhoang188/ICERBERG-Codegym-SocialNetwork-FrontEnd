import { Component, OnInit } from '@angular/core';
import {FriendrequestService} from '../../service/friendrequest.service';
import {Router} from '@angular/router';
import {LoveService} from '../../services/love.service';
import {Love} from '../../model/Love';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {

  id_user: number=2;
  id_post: number=1;
  checkLike: boolean=false;
  love: Love={}
  constructor(private myService: LoveService, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.checkLiked(this.id_post,this.id_user)
  }

  checkLiked(id_post: number,id_user:number){
    this.myService.getLike(id_post,id_user).subscribe(value => {
      if(value==null){
        this.checkLike=false;
      }else {
        this.checkLike=true;
      }
    }, error => {
      this.checkLike=false;
    })
  }
  like(id_post: number,id_user:number){

  }

}
