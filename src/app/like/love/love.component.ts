import { Component, OnInit } from '@angular/core';
import {FriendrequestService} from '../../services/friendrequest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
  id: number=1;
  id_post : number=2;
  constructor(private myService: FriendrequestService,
              private router: Router) { }

  ngOnInit(): void {
  }

}
