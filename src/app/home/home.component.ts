import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userCurrent: any;

  constructor(private router: Router,
              private userSv: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('USERNAME') != null) {
      const id = localStorage.getItem('ID');
      this.userSv.getById(id).subscribe(value1 => {
        this.userCurrent = value1;
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
