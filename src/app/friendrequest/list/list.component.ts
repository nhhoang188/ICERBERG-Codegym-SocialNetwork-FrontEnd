import { Component, OnInit } from '@angular/core';
import {FriendrequestService} from '../../service/friendrequest.service';
import {Router} from '@angular/router';
import {FriendRequest, User} from '../../model/FriendRequest';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  request: any;
  requests: any;

  users: any;
  user1: any;
  user2: any;
  user: any;
  id = 1;
  request1: FriendRequest={};

  check1: number=0;

  constructor(private myService: FriendrequestService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
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
      }, error => {
        console.log(error);
      })
    }, val => console.log(val))
  };

  send(id: number){
    this.myService.getUserById(id).subscribe(value => {
      this.user2=value;
      this.myService.getUserById(this.id).subscribe(value => {
        this.user1=value;
        this.request1.userSender=this.user1;
        this.request1.stt=false;
        this.request1.userReceiver=this.user2;
        console.log(this.request1)
        this.myService.create(this.request1).subscribe(
          ()=> {
            alert("thanh cong")
            // this.router.navigate(['/list'])
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
      if(this.request1==null){
        this.check1=0;
        alert(this.check1+ 'nguoi la')
      }else {
        if(this.request1.stt){
          this.check1=1;
          alert(this.check1+ 'ban be')
        }else {
          if(this.request1.userSender?.id==id1){
            this.check1=2;
            alert(this.check1+ 'dang cho tra loi')
          }else {
            this.check1=3
            alert(this.check1+ 'dang cho xac nhan')
          }
        }
      }
    },error => {
      console.log(error)
    })
  }




}
