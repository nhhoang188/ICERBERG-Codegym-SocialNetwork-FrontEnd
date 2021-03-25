import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChatRoom} from '../model/chat-room';

const API_URL=`${environment.apiUrl}/chatroom`

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  constructor(private http: HttpClient) { }
  getRoomByIds(first_user_id: number, second_user_id:any): Observable<any> {
    return this.http.get(API_URL+'/'+first_user_id+'/'+second_user_id)
  }
  create(id1: number, id2: number): Observable<any>{
    // @ts-ignore
    return this.http.post<any>(API_URL+'/'+id1+'/'+id2)
  }

}
