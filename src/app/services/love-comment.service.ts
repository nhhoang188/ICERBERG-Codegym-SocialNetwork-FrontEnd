import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Love} from '../model/Love';
import {LoveComment} from '../model/LoveComment';

const API_URL = `${environment.apiUrl}/lovecomments`;

@Injectable({
  providedIn: 'root'
})
export class LoveCommentService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(API_URL);
  }

  getById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  create(love: LoveComment): Observable<any> {
    return this.http.post<Love>(API_URL, love);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(API_URL + '/' + id);
  }


  getLike(id1: number, id2: number): Observable<any> {
    return this.http.get(API_URL + '/find?id1=' + id1 + '&id2=' + id2);
  }

  countLike(id: number): Observable<any> {
    return this.http.get(API_URL + '/count/' + id);
  }

  getAllByComment(id: number): Observable<any> {
    return this.http.get(API_URL + '/list/' + id);
  }
}
