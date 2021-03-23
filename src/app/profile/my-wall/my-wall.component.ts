import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-wall',
  templateUrl: './my-wall.component.html',
  styleUrls: ['./my-wall.component.css']
})
export class MyWallComponent implements OnInit {

  user: any;
  love: any;

  constructor(private router: Router,
              private userSv: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('USERNAME') != null) {
     this.activatedRoute.paramMap.subscribe(value => {
       const id = value.get('id');
       this.userSv.getById(id).subscribe(value1 => {
         this.user = value1;
       });
     })
    } else {
      this.router.navigate(['login']);
    }
  }
}
