import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}/comments`
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) {
  }
  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(API_URL, comment);
  }
  findById(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(API_URL + '/' + id);
  }
}
