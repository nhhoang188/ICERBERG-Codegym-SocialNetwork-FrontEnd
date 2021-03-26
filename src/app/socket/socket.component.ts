import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';
import {UserService} from '../services/user.service';
import {ChatRoomService} from '../services/chat-room.service';
import {ChatMessageService} from '../services/chat-message.service';
import {NotificationService} from '../services/notification.service';
import {ChatMessage} from '../model/chat-message';
import {FriendrequestService} from '../services/friendrequest.service';
import {ChatRoom} from '../model/chat-room';


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

  input!: string;
  id: any;
  user: any;
  friend: any;
  // @ts-ignore
  friends: any[];
  username: any;
  chatroom: any;
  chatMessages!: any[];
  notifications!: any[];
  // @ts-ignore
  public stompClient;
  // @ts-ignore
  public stompClientNotification;

  constructor(public messageService: MessageService,
              public userService: UserService,
              public chatRoomService: ChatRoomService,
              public chatMessageService: ChatMessageService,
              public friendRequest: FriendrequestService,
              public notificationService: NotificationService) {
    this.disconnectNotificationSocket();
    this.initializeWebSocketNotificationConnection();
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('ID');
    console.log(this.id);
    this.getUser();
    this.getAllFriends();
    // this.getNotifications();
  }

  getAllFriends() {
    if (this.id) {
      this.friendRequest.showListFriend(this.id).subscribe(data => {
          console.log(data);
          this.friends = data;
        },
        error => {
          console.log(error);
        });
    }
  }

  getUser() {
    if (this.id) {
      this.userService.getById(this.id).subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => {
        console.log(error);
      });
    }
  }

  //notification
  // async getNotifications() {
  //   let user = await this.userService.getById(this.id).toPromise();
  //   this.notificationService.getAllNotifications(user.id).subscribe(data => {
  //     this.notifications = data;
  //     console.log(this.notifications);
  //   }, error => {
  //     console.log(error)
  //   })
  // }
  // sendMessage() {
  //     if (this.input) {
  //       this.messageService.sendMessage(this.input);
  //       this.input = '';
  //     }
  // }

  getUserChatTo(friend: any) {
    // console.log(this.user.id);
    this.friend = friend;
    console.log(this.friend);
    this.chatRoomService.getRoomByIds(this.user.id, this.friend.id).subscribe(data => {
      console.log(data);
      if (data == null) {
        this.chatRoomService.create(this.user.id, this.friend.id).subscribe(value => {
          console.log(value);
          this.getAllFriends();
        }, error => console.log(error));
        console.log(this.chatroom);
        // this.getUserChatTo(friend)
      } else {
        this.chatroom = data;
        this.chatMessageService.getChatMessageByRoomId(this.chatroom.id).subscribe(data => {
          this.chatMessages = data;
          console.log(data);
          this.disconnectSocket();
          this.initializeWebSocketConnection(this.chatroom.name);
          $('#chatForm').collapse('show');
          $('#chat-history').animate({scrollTop: $('#chat-history').prop('scrollHeight')}, 500);
        }, error => {
          console.log(data);
        });
      }
    }, error => {
      console.log(error);
    });


  }

  closeChat() {
    this.disconnectSocket();
    this.friend = {};
    console.log(this.friend);
    $('#chatForm').collapse('hide');
  }

  // getRoomChat(friend: any) {
  //   // console.log(this.user.id);
  //   this.friend = friend;
  //   // console.log(this.friend.id);
  //   this.messageService.initializeWebSocketConnection(this.user.id, this.friend.id);
  // }

  sendMessage() {
    // console.log(this.user.id);
    // console.log(this.friend.id);
    if (this.input) {
      let chatMessage: ChatMessage = {
        content: this.input,
        sender: this.user,
        receiver: this.friend,
        chat_room_id: this.chatroom.id,
        user_sender_id: this.user.id,
        user_receiver_id: this.friend.id
      };
      this.sendMessageTo(chatMessage);
      this.input = '';
    }
  }

  disconnectSocket() {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  //notification
  disconnectNotificationSocket() {
    if (this.stompClientNotification) {
      this.stompClientNotification.disconnect();
    }
    console.log('Disconnected');
  }

  sendMessageTo(chatMessage: any) {
    console.log(chatMessage);
    this.stompClient.send('/app/send/message/' + this.chatroom.id, {}, JSON.stringify(chatMessage));
    //notification
    this.createNotification(this.friend.id);
  }

  //notification
  createNotification(receiverId: any) {
    debugger;
    let notification = {
      typeNoti: 'newMessage',
      user_sender_id: this.user.id,
      user_receiver_id: receiverId
    };
    this.stompClientNotification.send('/app/notification', {}, JSON.stringify(notification));
  }

  public initializeWebSocketConnection(roomChatName: any) {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    console.log(ws);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame: any) {
      console.log(frame);
      that.stompClient.subscribe(`${roomChatName}`, (message: any) => {
        console.log(message);
        let data = JSON.parse(message.body);
        console.log(data);
        if (data) {
          // @ts-ignore
          that.chatMessages.push(data);
        }
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
      console.log(frame);
      that.stompClientNotification.subscribe('/notification', (notification: any) => {
        console.log(notification);
        let data = JSON.parse(notification.body);
        console.log(data);
        if (data) {
          if (that.user.id == data.user_receiver_id) {
            // @ts-ignore
            that.notifications.push(data);
            console.log('notifications: ' + that.notifications);
          }
        }
      });
    });
  }

}
