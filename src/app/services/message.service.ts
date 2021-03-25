import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


// @ts-ignore
declare var SockJS;

// @ts-ignore
declare var Stomp;
@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnInit{
  // @ts-ignore
  public stompClient;
  public msg = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  }


  public initializeWebSocketConnection(senderId: any, receiverId: any) {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    console.log(ws);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame: any) {
      console.log(frame)
      that.stompClient.subscribe(`/message/${senderId}/${receiverId}`, (message: any) => {
        console.log(message);
        let data = JSON.parse(message.body)
        console.log(data);
        if (data) {
          // @ts-ignore
          that.msg.push(data);
        }
      });
    });
  }

  sendMessageTo(senderId:any, receiverId: any, chatMessage: any) {
    console.log(chatMessage);
    this.stompClient.send('/app/send/message/'+ senderId + '/' + receiverId, {}, JSON.stringify(chatMessage));
  }


}
