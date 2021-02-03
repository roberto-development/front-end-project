import { User } from './User.model';

export class Account extends Object {
  id: number;
  email: string;
  password: string;
  // new email e new password?
  // altro component AccountDTO o le metto come proprietà di questo oggetto
  user: User;
}
