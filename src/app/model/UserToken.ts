import {Role} from './Role';

export interface UserToken {
  id: number;
  username: string;
  password: string;
  accessToken?: string;
  gender?: string;
  enabled?: boolean;
  roles: Role[];
}
