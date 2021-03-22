import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';



@Component({
  selector: 'app-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postStatusForm: any;
  content: any;
  date: any;
  privacy = 'public';

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width: number = 0;

  // fake userId
  userId: any;



  constructor(private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.userId = localStorage.getItem('ID');
  }


  ngOnInit(): void {
    this.postStatusForm = new FormGroup({
      content: new FormControl('')
    });
  }

  onPost() {
    let status = this.createPost();
     console.log("bai Post"  + "" + status)
    this.postService.createStatusPost(status).subscribe(result => {
      alert('Create Post Succsess');
      this.postStatusForm.reset;
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  async setIntervalProgress() {
    this.timeOut = true;
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
    post.privacy = this.privacy;
    post.image = this.fb;
    return post;
  }

  selectedFile?: File;
  fb?: any;
  downloadURL?: Observable<string>;
  timeOut?: boolean = false;

  onFileSelected(event?: any) {
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
          this.setIntervalProgress();
        }
      });

  }




}
