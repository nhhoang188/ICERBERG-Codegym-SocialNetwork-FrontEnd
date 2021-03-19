import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FriendRequest} from '../model/FriendRequest';

const API_URL=`${environment.apiUrl}/friendrequests`

const API_URL2=`${environment.apiUrl}/users`


@Injectable({
  providedIn: 'root'
})
export class FriendrequestService {

  constructor( private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(API_URL);
  }
  getById(id : number):Observable<any>{
    return  this.http.get(API_URL+'/'+id);
  }

  create(friendRequest: FriendRequest):Observable<FriendRequest>{
    return this.http.post<FriendRequest>(API_URL,friendRequest)
  }
  update(id: number,friendRequest : FriendRequest) :Observable<any>{
    return this.http.put<any>(API_URL+'/'+id,friendRequest)
  }
  delete(id : number):Observable<any>{
    return  this.http.delete(API_URL+'/'+id);
  }

  getAllUser():Observable<any>{
    return this.http.get<any>(API_URL2);
  }
  getFriend(id1:number,id2:number):Observable<FriendRequest>{
    return this.http.get(API_URL+'/check?id='+id1+'&id2='+id2)
  }
  getUserById(id : number):Observable<any>{
    return  this.http.get(API_URL2+'/'+id);
  }
}
