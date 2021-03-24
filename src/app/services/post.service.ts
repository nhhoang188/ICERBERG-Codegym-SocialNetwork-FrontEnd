import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
// @ts-ignore
import {Post} from '../model/Post';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  createStatusPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(API_URL + '/posts', post);
  }

  editImagePostStatus(id: number, post: Post): Observable<any> {
    return this.httpClient.put<any>(`${API_URL}/posts/image/${id}`, post)
  }

  editStatusPost(id: number, post: Post): Observable<any> {
    return this.httpClient.put<any>(`${API_URL}/posts/${id}`, post);
  }

  findPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${API_URL}/posts/${id}`);
  }

  findPostByUserId(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${API_URL}/posts/user/${id}`);
  }

  deletePostById(id: number): Observable<Post> {
    return this.httpClient.delete<Post>(`${API_URL}/posts/${id}`);
  }
}
