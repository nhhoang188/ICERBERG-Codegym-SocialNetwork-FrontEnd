import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL=`${environment.apiUrl}/friendrequests`
@Injectable({
  providedIn: 'root'
})
export class FriendSimilarService {

  constructor(private http: HttpClient) { }
  getAllFriendSimilar(id1:number,id2:number):Observable<any>{
    return this.http.get<any>(API_URL+'/listsimilarfriend/'+id1+'/'+id2);
  }

}
