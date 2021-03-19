import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";
import {AngularFireStorage} from '@angular/fire/storage';

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

  // fake userId
  userId: any;

  constructor(private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.postStatusForm = new FormGroup({
      content: new FormControl('')
    })

  }

  onPost() {
    let status = this.createPost();

    this.postService.createStatusPost(status).subscribe(result => {
      alert('success!!!');
      this.postStatusForm.reset
      this.router.navigate(['/create-post']);
    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  createDate(): Date {
    let currentDate = new Date();
    return currentDate;
  }

  createPost(): Post {
    let post: Post = <Post>{};
    post.userId = this.userId = 1;
    post.content = this.postStatusForm.get('content').value;
    post.createDate = this.createDate();
    post.privacy = this.privacy;
    post.image = this.fb;


    console.log('Date' + post.createDate);

    return post;
  }

  product?: any;
  selectedFile?: File;
  fb?:any;
  downloadURL?: Observable<string>;

  onFileSelected(event?:any) {
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
