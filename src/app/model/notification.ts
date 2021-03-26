import {User} from './User';

export class Notification {
  id?:number;
  typeNoti?:string;
  userSender?:User;
  user_sender_id?:number;
  userReceiver?:User;
  user_receiver_id?:number;
  status?:boolean;
}
