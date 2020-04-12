import { Injectable } from "@angular/core";
import { User } from "../../models/User";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();

  constructor() {}

  /*
  getUser(): User {
    return JSON.parse(localStorage.getItem("currentUser"));
  }
  */

  saveUser(user: User) {
    this.userSource.next(user);
    //localStorage.setItem("currentUser", JSON.stringify(user));
  }

  deleteUser() {
    this.userSource.next(null);
    //localStorage.removeItem("currentUser");
  }
}
