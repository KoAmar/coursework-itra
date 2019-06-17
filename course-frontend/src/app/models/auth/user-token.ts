import {User} from '../user';

export class UserToken implements User {
  login: string;
  email: string;
  role: string;
  iat: string;
  exp: string;
  activated: boolean;
  id: string;
}
