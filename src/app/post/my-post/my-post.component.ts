import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../model/Post';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  user: User = {};
  listPost: any;
  userId: any;

  constructor(private userSv: UserService,
              private postSv: PostService,
              private route: Router,
              private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.userId = localStorage.getItem('ID');
    this.privacies = [
      {model: 'Public'},
      {model: 'Private'},
      {model: 'Friend only'}
    ];
    this.getUser();
  }

  ngOnInit(): void {
    this.postStatusForm = new FormGroup({
      content: new FormControl(''),
      privacy: new FormControl('')
    });
  }

  getUser() {
    if (localStorage.getItem('USERNAME') != null) {
      this.activatedRoute.paramMap.subscribe(value => {
        const id = value.get('id');
        this.userSv.getById(id).subscribe(value1 => {
          this.user = value1;
          this.getPostByUserId();
        });
      });
    } else {
      this.route.navigate(['login']);
    }
  }

  getPostByUserId() {
    this.postSv.findPostByUserId(this.user.id).subscribe(value => {
      this.listPost = value;
    });
  }

  deletePost(id?: any) {
    this.postSv.deletePostById(id).subscribe(() => {
      alert('Delete Ok!');
      this.getPostByUserId();
    });
  }


  postStatusForm: any;
  content: any;
  date: any;
  privacy = 'public';
  privacies: any;
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width: number = 0;

  // fake userId


  onPost() {
    let status = this.createPost();
    this.postService.createStatusPost(status).subscribe(result => {
      alert('Create Post Succsess');
      this.postStatusForm.reset;
      this.getUser();
    }, error => {
      console.log(error);
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

  // @ts-ignore
  createDate(): Date {
    let currentDate = new Date();
    return currentDate;
  }

  createPost(): Post {
    let post: Post = <Post> {};
    post.userId = this.userId;
    post.content = this.postStatusForm.get('content').value;
    post.createDate = this.createDate();
    let pr = this.postStatusForm.get('privacy').value;
    if (pr == '') {
      post.privacy = 'Public';
    } else {
      post.privacy = pr;
    }
    post.image = this.fb;
    return post;
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
}
