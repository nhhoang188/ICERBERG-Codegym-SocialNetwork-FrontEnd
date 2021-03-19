import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  love: any;

  constructor(private router: Router,
              private userSv: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('USERNAME') != null) {
      this.userSv.getById(localStorage.getItem('ID')).subscribe(value1 => {
        this.user = value1;
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
