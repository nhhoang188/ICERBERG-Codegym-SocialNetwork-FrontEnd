import { Component, OnInit } from '@angular/core';


// @ts-ignore
declare var $;
// @ts-ignore
declare var SockJS;
// @ts-ignore
declare var Stomp;
@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  // @ts-ignore
  public stompClient;
  // @ts-ignore
  public stompClientNotification;
  constructor() {
    // this.initializeWebSocketConnection()
    this.initializeWebSocketNotificationConnection()
  }

  ngOnInit(): void {
  }

  public initializeWebSocketConnection(roomChatName: any) {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    console.log(ws);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame: any) {
      console.log(frame)
      that.stompClient.subscribe(`${roomChatName}`, (message: any) => {
        // console.log(message);
        // let data = JSON.parse(message.body)
        // console.log(data);
        // if (data) {
        //   // @ts-ignore
        //   that.chatMessages.push(data);
        // }
      });
    });
  }
  public initializeWebSocketNotificationConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    console.log(ws);
    this.stompClientNotification = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClientNotification.connect({}, function(frame: any) {
      console.log(frame)
      // that.stompClientNotification.subscribe("/notification", (notification: any) => {
      //   console.log(notification);
      //   let data = JSON.parse(notification.body)
      //   console.log(data);
      //   if (data) {
      //     if (that.user.id==data.user_receiver_id) {
      //       // @ts-ignore
      //       that.notifications.push(data);
      //       console.log("notifications: " + that.notifications);
      //     }
      //   }
      // });
    });
  }

}
