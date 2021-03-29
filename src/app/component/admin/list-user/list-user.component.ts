import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUser: any;
  roleUser: any;

  constructor(private userSv: UserService,
              private route: Router
              ) {
    this.roleUser = localStorage.getItem('ROLE');
    if (this.roleUser !== 'ROLE_ADMIN') {
      alert('Access Denied!!!');
      this.route.navigate(["/"])
    } else {
      this.getAllUser();
    }
  }

  ngOnInit(): void {
  }

  getAllUser() {
    this.userSv.getAll().subscribe(value => {
      this.listUser = value;
    }, error => {
      console.log(error);
    });
  }

  block(id: number) {
  }

}
