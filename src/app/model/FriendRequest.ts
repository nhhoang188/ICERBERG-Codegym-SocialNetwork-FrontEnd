import {User} from './User';

export interface FriendRequest{
  id?: number;
  userSender?: User;
  userReceiver?: User;
  stt?: boolean
}

// export interface User{
//   id?:number;
//   username?: string;
//   password?: string;
//
// }
