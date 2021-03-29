import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../model/User';
import {JwtService} from '../../../services/jwt.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  createForm: any;
  error = '';
  loading = false;
  submitted = false;

  constructor(private usersv: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private jwtService: JwtService) {
    this.createFormReset();
  }

  ngOnInit(): void {
    if (localStorage.getItem('USERNAME') != null) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }


  createFormReset() {
    this.createForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
      birthDay: ['']
    });
  }

  createAcount() {
    const user1: User = {
      username: this.createForm.value.username,
      password: this.createForm.value.password,
      phone: this.createForm.value.phone,
      email: this.createForm.value.email,
      birthDay: this.createForm.value.birthDay
    };
    this.usersv.createUser(user1).subscribe(() => {
      alert('Create Acount Sucsses!');
      this.createFormReset();
      this.router.navigate(['login']);
    }, error1 => {
      alert(`Please fill in the correct information!!!`);
      console.log(error1);
      this.loading = false;
    });
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  login() {
    this.submitted = true;
    this.loading = true;
    this.jwtService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          localStorage.setItem('ROLE', data.roles[0].authority);
          localStorage.setItem('USERNAME', data.username);
          localStorage.setItem('ID', data.id);
          localStorage.setItem('infomodifier', data.infomodifier);
          this.router.navigate(['home']);
        },
        error => {
          alert(`you haven't created an account or your password is wrong!`);
          console.log(error);
          this.loading = false;
        });
  }

}
