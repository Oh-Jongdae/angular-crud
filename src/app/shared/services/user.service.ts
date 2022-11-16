import {Injectable} from "@angular/core";
import {User} from "../model/user.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class UserService {

  userObj: User = {email: "", userEntityRoles: [''], username: ""}

  public user = new BehaviorSubject<User>(this.userObj);

  getUserAuthenticated() {
    return this.user.getValue();
  }

  setUserAuthenticated(user: User) {
    this.user.next(user);
  }
}
