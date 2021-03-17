import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URl = `http://localhost:8080`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URl + `/register`, user);
  }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URl + `/login`, user);
  }
}
