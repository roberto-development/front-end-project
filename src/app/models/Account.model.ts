import { UserDTO } from './UserDTO.model';

export class AccountLogin extends Object {
  // id: number;
  email: string;
  password: string;
  newPassword: string;
  // new email e new password?
  // altro component AccountDTO o le metto come proprietà di questo oggetto
  userDTO: UserDTO;
}
