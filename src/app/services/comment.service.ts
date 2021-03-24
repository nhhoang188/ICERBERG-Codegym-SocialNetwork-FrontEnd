import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class CommentService {
  private API_URL = `${environment.apiUrl}/comments`

  constructor(private httpClient: HttpClient) {
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.API_URL, comment);
  }


  // làm theo yc của cúc..
  findById(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(this.API_URL + '/' + id);
  }

  findAllCommentByPostId(postId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/${postId}`);
  }

  deleteComment(postId: number, comment: Comment): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/${postId}`);
  }
}
