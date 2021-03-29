import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check=false
  fullname: string=""
  users: any
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  searchAll(fullname: string){
    this.check=true
    this.userService.search(fullname).subscribe(value => {
      console.log(value)
      this.users=value
      this.fullname=""
    },error => console.log(error))
  }
  close(){
    this.check=!this.check
  }
  home(){
    this.check=false;
  }


}
