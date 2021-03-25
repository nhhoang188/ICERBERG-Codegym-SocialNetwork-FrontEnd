import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comments} from "../model/Comments";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class CommentService {
  private API_URL = `${environment.apiUrl}/comments`

  constructor(private httpClient: HttpClient) {
  }

  createComment(comment: Comments): Observable<Comments> {
    return this.httpClient.post<Comments>(this.API_URL, comment);
  }


  // làm theo yc của cúc..
  findById(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(this.API_URL + '/' + id);
  }

  findAllCommentByPostId(postId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/${postId}`);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/${commentId}`);
  }

  updateComment(commentId: number, comment: Comments): Observable<number> {
    return this.httpClient.put<number>(`${this.API_URL}/${commentId}`, comment);
  }

  findCommentByCommentId(postId: number, commentId: number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${this.API_URL}/${postId}/edit-comment/${commentId}`);
  }
}
