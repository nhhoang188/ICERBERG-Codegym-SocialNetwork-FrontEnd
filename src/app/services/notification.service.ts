import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8080/notification'
  constructor(
    private http: HttpClient
  ) { }

  getAllNotifications(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/${id}`)
  }
  getNotificationById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  createNotification(notification: Notification): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, notification);
  }
  updateNotification(id: number, notification: Notification): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, notification);
  }
  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text'});
  }
}
