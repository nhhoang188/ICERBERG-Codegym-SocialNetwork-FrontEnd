import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import firebase from "firebase";
import {User} from "../../model/User";


@Component({
  selector: 'app-list-user-admin',
  templateUrl: './list-user-admin.component.html',
  styleUrls: ['./list-user-admin.component.css']
})
export class ListUserAdminComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe((res:any)=>{
      this.users = res
    })
  }
}
