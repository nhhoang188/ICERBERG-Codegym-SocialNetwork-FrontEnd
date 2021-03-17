import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
// @ts-ignore
import {Post} from '../model/Post';
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}/posts`

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  createStatusPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(API_URL, post);
  }
}
