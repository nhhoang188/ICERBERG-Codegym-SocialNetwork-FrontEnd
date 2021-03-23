import {User} from './User';
import {Post} from './Post';

export interface LoveComment{
  id?:number;
  user?: User;
  comment?: Comment;
}
export interface Comment{
  id?:number;
  userId?: number
  content?: string
  createDate :Date
}
