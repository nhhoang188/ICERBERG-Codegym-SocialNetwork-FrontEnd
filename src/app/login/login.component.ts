import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  createForm: any;

  constructor(private usersv: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
      birthDay: ['']
    });
  }

  createAcount() {
    const createForm = this.createForm.value;

    const user1: User = this.createForm.value;
    console.log(user1);
    this.usersv.createUser(user1).subscribe(() => {
      alert('Create Acount Sucsses!');
      this.router.navigate(['login']);
    });
  }
}
