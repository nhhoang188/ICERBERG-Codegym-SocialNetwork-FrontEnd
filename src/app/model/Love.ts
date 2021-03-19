import {User} from './User';
// @ts-ignore
import {Post} from './Post';
export interface Love{
  id?:number;
  user?: User;
  post?: Post;
}
