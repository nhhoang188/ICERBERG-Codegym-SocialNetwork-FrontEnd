import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width: number = 0;

  idUser: any;
  user: User = {};
  updateForm: any;
  loading = false;
  submitted = false;

  constructor(private usersv: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private storage: AngularFireStorage) {
    this.idUser = localStorage.getItem('ID');
    this.usersv.getById(this.idUser).subscribe(value => {
      this.user = value;
      this.updateForm.patchValue(this.user);
    });
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      fullname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
      birthDay: [''],
      description: [''],
      bio: [''],
    });

  }


  updateAcount() {
    this.user.fullname = this.updateForm.get('fullname')?.value;
    this.user.phone = this.updateForm.get('phone')?.value;
    this.user.birthDay = this.updateForm.get('birthDay')?.value;
    this.user.description = this.updateForm.get('description')?.value;
    this.user.bio = this.updateForm.get('bio')?.value;
    this.user.password = this.updateForm.get('password')?.value;
    console.log("cover:  :" +this.fb);
    console.log("ava:  " +this.fbava);
    if (this.fbava !== null) {
      this.user.avatar = this.fbava;
    }
    if (this.fb !== null) {
      this.user.imgcover = this.fb;
    }
    console.log(this.user);
    this.usersv.updateUser(this.user.id, this.user).subscribe(value => {
      console.log(value);
      alert('OK');
    }, error => {
      console.log(error);
    });
  }


  selectedFile?: File;
  fb?: any;
  downloadURL?: Observable<string>;
  timeOut?: boolean = false;

  onFileSelected(event?: any) {
    this.setIntervalProgress();
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }


  fbava?: any;
  downloadURLava?: Observable<string>;

  onFileSelectedAvatar(event?: any) {
    this.setIntervalProgress();
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURLava = fileRef.getDownloadURL();
          this.downloadURLava.subscribe(url => {
            if (url) {
              this.fbava = url;
            }
            console.log("avartar:   :" +this.fbava);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  async setIntervalProgress() {
    // this.timeOut = true;
    var loading = setInterval(() => {
      this.width = +this.width + 5;
      console.log(this.width);
      if (this.width > 75) {
        clearInterval(loading);
      }
    }, 100);
  }
}
