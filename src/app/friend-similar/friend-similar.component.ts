import {Component, Input, OnInit} from '@angular/core';
import {FriendSimilarService} from '../services/friend-similar.service';

@Component({
  selector: 'app-friend-similar',
  templateUrl: './friend-similar.component.html',
  styleUrls: ['./friend-similar.component.css']
})
export class FriendSimilarComponent implements OnInit {

  id_myUser: any;
  @Input() id_myFriend: any;
  users: any;

  constructor(private myService: FriendSimilarService) {
    this.id_myUser = localStorage.getItem("ID");
  }

  ngOnInit(): void {
    this.getAll(this.id_myUser, this.id_myFriend);
  }

  getAll(id_myUser: number, id_myFriend: number) {
    this.myService.getAllFriendSimilar(id_myUser, id_myFriend).subscribe(value => {
      console.log(value);
      this.users = value;
    }, error => console.log(error));
  }

}
