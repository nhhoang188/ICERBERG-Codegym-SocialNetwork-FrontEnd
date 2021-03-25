import {Component, Input, OnInit} from '@angular/core';
import {FriendSimilarService} from '../../../../services/friend-similar.service';

@Component({
  selector: 'app-similar-friend',
  templateUrl: './similar-friend.component.html',
  styleUrls: ['./similar-friend.component.css']
})
export class SimilarFriendComponent implements OnInit {
  id_myUser: any;
  @Input() id_myFriend: any;
  users: any;

  constructor(private myService: FriendSimilarService) {
    this.id_myUser = localStorage.getItem('ID');
  }

  ngOnInit(): void {
    this.getAll(this.id_myUser, this.id_myFriend);
  }

  getAll(id_myUser: number, id_myFriend: number) {
    this.myService.getAllFriendSimilar(id_myUser, id_myFriend).subscribe(value => {
      this.users = value;
    }, error => console.log(error));
  }
}
