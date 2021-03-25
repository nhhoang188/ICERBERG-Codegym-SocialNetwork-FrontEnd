import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FriendRequest} from '../model/FriendRequest';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private API_URL = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {
  }

  getNotiByFriendRequest(id: any): Observable<FriendRequest> {
    return this.httpClient.get<FriendRequest>(this.API_URL + `/notifriend/` + `${id}`);
  }

  getNotiByCmtOfMyPost(id: any): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + `/notipost/` + `${id}`);
  }

  getNotiByLoveOfMyPost(id: any): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + `/notilove/` + `${id}`);
  }
}
