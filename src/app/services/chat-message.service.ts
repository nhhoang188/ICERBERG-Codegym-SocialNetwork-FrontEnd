import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL=`${environment.apiUrl}/message`

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  constructor(private http: HttpClient) { }

  getChatMessageByRoomId(chat_room_id: number): Observable<any> {
    return this.http.get(API_URL+'/'+chat_room_id)
  }


}
