import { Component, OnInit } from '@angular/core';
import {FriendRequest} from '../../model/FriendRequest';
import {FriendrequestService} from '../../services/friendrequest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  request: any;
  requests: any;

  requess: FriendRequest={};
  users: any;
  user1: any;
  user2: any;
  user: any;
  id = 1;
  id2= 0;
  reques_id:any;
  request1: FriendRequest={};

  check1?: number;
  constructor(private myService: FriendrequestService,
              private router: Router) {
    this.id2=this.id;
  }
  ngOnInit(): void {
    this.checkFriends(this.id,this.id2)

  }

  getAll(){
    this.myService.getAll().subscribe(value => {
      this.requests= value;
      console.log(this.requests)
    },val=>console.log(val))
  }

  accept(id: number) {
    this.myService.getById(id).subscribe(value => {
      this.request = value;
      this.request.stt = true;
      this.myService.update(id,this.request).subscribe(()=>{
        this.getAll();
        this.check1=1;
      }, error => {
        console.log(error);
      })
    }, val => console.log(val))
  };

  unfriend(id: number){
    this.myService.getById(id).subscribe(value => {
      this.request = value;
      this.request.stt = true;
      this.myService.delete(id).subscribe(()=>{
        this.getAll();
        this.check1=0;
      }, error => {
        console.log(error);
      })
    }, val => console.log(val))
  };

  send(){
    this.myService.getUserById(this.id2).subscribe(value => {
      this.requess.userReceiver=value;
      this.myService.getUserById(this.id).subscribe(value => {
        this.requess.userSender=value;
        this.requess.stt=false;
        this.myService.create(this.requess).subscribe(
          ()=> {
            this.checkFriends(this.id,this.id2)
            this.check1=2;
            alert("thanh cong")
          },() => alert("that bai"));
      },error => {
        console.log(error);
        this.user=null
      })
    },error => {
      console.log(error);
      this.user=null
    })
  }
  checkFriends(id1:number, id2: number){
    this.myService.getFriend(id1,id2).subscribe(value => {
      this.request1=value
      this.getAll()
      if(this.request1==null){
        this.check1=0;
      }else {
        this.reques_id=this.request1.id;
        if(this.request1.stt){
          this.check1=1;
        }else {
          if(this.request1.userSender?.id==id1){
            this.check1=2;
          }else {
            this.check1=3
          }
        }
      }
    },error => {
      console.log(error)
    })
  }




}
