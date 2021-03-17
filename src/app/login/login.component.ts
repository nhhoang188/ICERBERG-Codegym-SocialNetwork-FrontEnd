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
      username: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
      birthDay: ['']
    });
  }


  createAcount() {
    const date =this.createForm.value.birthDay;
    console.log(date);
    const user1: User = {
      username: this.createForm.value.username,
      password: this.createForm.value.password,
      phone: this.createForm.value.phone,
      email: this.createForm.value.email,
      birthDay: this.createForm.value.birthDay
    };
    console.log(user1);
    this.usersv.createUser(user1).subscribe(() => {
      alert('Create Acount Sucsses!');
      // this.router.navigate(['login']);
    });
  }

}
