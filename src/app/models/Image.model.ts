import { Byte } from "@angular/compiler/src/util";
import { User } from "./User.model";

export class Image extends Object {
    id: number;
    img: Byte[] = [];
    usersId: User;
}