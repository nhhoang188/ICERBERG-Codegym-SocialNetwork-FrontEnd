import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {Post} from '../../../model/Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  //region fake idPost, idUser
  idUserCurrent: any;
  userCurrent: User = {};
  idPost: any;
  idUser: any;
  user: User = {};
  //endregion
  contents: any;
  privacy?: string;
  privacies: any;
  post: Post = {};
  editForm = new FormGroup({
    contents: new FormControl(''),
    imagee: new FormControl(''),
    privacy: new FormControl('')
  });

  constructor(private postService: PostService,
              private userSv: UserService,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.idUserCurrent = localStorage.getItem('ID');
    this.userSv.getById(this.idUserCurrent).subscribe(value => {
      this.userCurrent = value;
    });

    this.privacies = [
      {model : "Public"},
      {model : "Private"},
      {model : "Friend only"}
    ];

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(result => {
      this.idPost = result.get('id');
      this.postService.findPostById(this.idPost).subscribe(
        result => {
          this.post = result;
          this.idUser = this.post.userId;
          this.userSv.getById(this.idUser).subscribe(value => {
            this.user = value;
          })
          this.createEditForm(this.post);
        }, error => {
          console.log(error);
        }
      );

    }, error => {
      console.log(error);
    });


  }

  private createEditForm(post: any) {
    this.editForm.get('contents')?.setValue(post.content);
    this.editForm.get('privacy')?.setValue(post.privacy);
  }

  cloneButton() {
  }

  deleteImage(){
    this.post.content = this.editForm.get('contents')?.value;
    this.postService.editImagePostStatus(this.idPost, this.post).subscribe(
      result => {
        console.log('success!');
        this.route.navigate([`/profile/${this.idUserCurrent}`]);
      }, error => {
        console.log(error);
      }
    );
  }

  onSave() {
    this.post.content = this.editForm.get('contents')?.value;
    // if (this.post.image !== null)
    this.post.image = this.fb;
    this.post.privacy = this.editForm.get('privacy')?.value;
    console.log(this.post);
    this.postService.editStatusPost(this.idPost, this.post).subscribe(
      result => {
        console.log('success!');
        this.route.navigate([`/profile/${this.idUserCurrent}`]);
      }, error => {
        console.log(error);
      }
    );
  }

  selectedFile?: File;
  fb?: any;
  downloadURL?: Observable<string>;

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
        }
      });
  }
}
