import { Injectable } from "@angular/core";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUser(): User {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  saveUser(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  deleteUser() {
    localStorage.removeItem("currentUser");
  }
}
