import {Component, Input, OnInit} from '@angular/core';
import {FriendrequestService} from '../../services/friendrequest.service';
import {FriendRequest} from '../../model/FriendRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listfriend',
  templateUrl: './listfriend.component.html',
  styleUrls: ['./listfriend.component.css']
})
export class ListfriendComponent implements OnInit {
  users: any;
  // id_user: any;
  @Input() id: any;
  request: any;
  requests: any;
  // users: any;
  user1: any;
  user: any;

  id2 = 0;
  reques_id: any;
  request1: FriendRequest = {};

  check1?: number;


  getAll() {
    this.myService.getAll().subscribe(value => {
      this.requests = value;
      console.log(this.requests);
    }, val => console.log(val));
  }

  accept(id: number) {
    this.myService.getById(id).subscribe(value => {
      this.request = value;
      this.request.stt = true;
      this.myService.update(id, this.request).subscribe(() => {
        this.getAll();
        this.check1 = 1;
      }, error => {
        console.log(error);
      });
    }, val => console.log(val));
  };

  unfriend(id: number) {
    this.myService.getById(id).subscribe(value => {
      this.request = value;
      this.request.stt = true;
      this.myService.delete(id).subscribe(() => {
        this.getAll();
        this.check1 = 0;
      }, error => {
        console.log(error);
      });
    }, val => console.log(val));
  };

  send() {
    this.myService.getUserById(this.id2).subscribe(value => {
      this.request.userReceiver = value;
      this.myService.getUserById(this.id).subscribe(value => {
        this.request.userSender = value;
        this.request.stt = false;
        this.myService.create(this.request).subscribe(
          () => {
            this.checkFriends(this.id, this.id2);
            this.check1 = 2;
            alert('thanh cong');
          }, () => alert('that bai'));
      }, error => {
        console.log(error);
        this.user = null;
      });
    }, error => {
      console.log(error);
      this.user = null;
    });
  }

  checkFriends(id1: number, id2: number) {
    this.myService.getFriend(id1, id2).subscribe(value => {
      this.request1 = value;
      this.getAll();
      if (this.request1 == null) {
        this.check1 = 0;
      } else {
        this.reques_id = this.request1.id;
        if (this.request1.stt) {
          this.check1 = 1;
        } else {
          if (this.request1.userSender?.id == id1) {
            this.check1 = 2;
          } else {
            this.check1 = 3;
          }
        }
      }
    }, error => {
      console.log(error);
    });
  }


  //
  // constructor(private myService: FriendrequestService,
  //             private router: Router) {
  //   this.id2=this.id;
  // }
  // ngOnInit(): void {
  //   this.checkFriends(this.id,this.id2)
  //
  // }

  constructor(private myService: FriendrequestService, private friendService: FriendrequestService) {
  }

  ngOnInit(): void {
    this.getAllFriend(this.id);
    this.checkFriends(this.id, this.id2);
  }

  getAllFriend(id_user: number) {
    this.friendService.showListFriend(id_user).subscribe(value => {
      this.users = value;
      console.log(value);
    }, error => console.log(error));
  }

}
