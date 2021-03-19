import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  //region fake idPost, idUser
  idPost: any;
  idUser = 1;
  //endregion
  contents: any;
  post: any;
  editForm = new FormGroup({
    contents: new FormControl('')
  })

  constructor(private postService: PostService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(result => {
      this.idPost = result.get('id');
    }, error => {
      console.log(error);
    })
    this.getPostById(this.idPost, this.idUser);
  }

  private getPostById(idPost: number, idUser: number) {
    this.postService.findPostById(idPost).subscribe(
      result => {
        this.post = result;
        this.createEditForm(this.post);
      }, error => {
        console.log(error);
      }
    );
  }

  private createEditForm(post: any) {
    this.editForm.get('contents')?.setValue(post.content);
  }

  onSave() {
    this.post.content = this.editForm.get('contents')?.value;

    this.postService.editStatusPost(this.idPost, this.post).subscribe(
      result => {
        console.log('success!')
        this.route.navigate([`/edit-post/${this.idPost}`])
      }, error => {
        console.log(error);
      }
    );
  }
}
