import {User} from './User';

export class ChatRoom {
  id?:number;
  name?:string;
  firstUser?:User;
  first_user_id ?:number;
  secondUser?: User;
  second_user_id?:number;
}
