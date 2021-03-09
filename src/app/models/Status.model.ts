type arrayFriend = Array<{
  id: number;

  idSender: number;

  idRecipient: number;

  status: number;
}>;

export class Status extends Object {
  id: number;
  typeStatus: string;
  friendshipList: arrayFriend;
  codiceStatus: string;
}
