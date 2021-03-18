import { Component } from '@angular/core';
import {FriendrequestService} from './service/friendrequest.service';
import {Router} from '@angular/router';
import {FriendRequest} from './model/FriendRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iceberg-socialnetwork-frontend';
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
    this.myService.getAllUser().subscribe(value => {
      this.users= value;
    },val=>console.log(val))
  }

  findById(id:number): any{

    this.myService.getUserById(id).subscribe(value => {
      this.user=value;
    },error => {
      console.log(error);
      this.user=null
    })
  }



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
