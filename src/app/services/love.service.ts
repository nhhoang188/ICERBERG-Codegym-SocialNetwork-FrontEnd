import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FriendRequest} from '../model/FriendRequest';
import {Love} from '../model/Love';

const API_URL=`${environment.apiUrl}/loves`
@Injectable({
  providedIn: 'root'
})
export class LoveService {


  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(API_URL);
  }
  getById(id : number):Observable<any>{
    return  this.http.get(API_URL+'/'+id);
  }

  create(love: Love):Observable<FriendRequest>{
    return this.http.post<FriendRequest>(API_URL,love)
  }
  // update(id: number,friendRequest : FriendRequest) :Observable<any>{
  //   return this.http.put<any>(API_URL+'/'+id,friendRequest)
  // }
  delete(id : number):Observable<any>{
    return  this.http.delete(API_URL+'/'+id);
  }


  getLike(id1:number,id2:number):Observable<Love>{
    return this.http.get(API_URL+'/find?id1='+id1+'&id2='+id2)
  }

}
