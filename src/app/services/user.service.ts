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

  getAll(): Observable<User> {
    return this.httpClient.get<User>(API_URl + '/admin/users');
  }

  getById(id: any): Observable<User> {
    return this.httpClient.get<User>(API_URl + '/users/' + `${id}`);
  }

  getByIdAndInfoPublic(id: any): Observable<User> {
    return this.httpClient.get<User>(API_URl + '/users/info/' + `${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URl + '/users/' + `${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URl + '/users' + `/${id}`);
  }
  search(fullname: string): Observable<any>{
    return this.httpClient.get<any>(API_URl + '/users/search?fullname='+fullname)
}

}
