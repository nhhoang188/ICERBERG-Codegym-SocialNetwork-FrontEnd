import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-menu-timeline',
  templateUrl: './menu-timeline.component.html',
  styleUrls: ['./menu-timeline.component.css']
})
export class MenuTimelineComponent implements OnInit {

  user: any;
  userPublic: any;
  guest: any;

  constructor(private router: Router,
              private userSv: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      const id = value.get('id');
      if (localStorage.getItem('USERNAME') != null) {
        this.userSv.getById(id).subscribe(value1 => {
          this.user = value1;
        });
      } else {
        this.userSv.getByIdAndInfoPublic(id).subscribe(value1 => {
          this.guest = value1;
        });
      }
    });
  }
}
