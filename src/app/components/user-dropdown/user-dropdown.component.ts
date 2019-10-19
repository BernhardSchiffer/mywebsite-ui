import { Component, OnInit } from "@angular/core";
import { Login } from "../../models/Login";
import { User } from "../../models/User";
import { UserService } from "../../services/user-service/user.service";
import { TokenService } from "../../services/token-service/token.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
  styleUrls: ["./user-dropdown.component.css"]
})
export class UserDropdownComponent implements OnInit {
  user: User = null;

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  async loginUser(event) {
    event.preventDefault();
    let myForm = document.forms["login"];
    let formData = new FormData(myForm);
    let login = new Login(formData);

    let res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    });
    let body = await res.json();
    if (body) {
      console.log(body);
      let user: User = body;
      this.userService.saveUser(user);
    }
    if (res.headers.get("x-auth-token")) {
      this.tokenService.saveToken("jwt", res.headers.get("x-auth-token"));
      window.location.href = "/";
      myForm.reset();
    }
    return false;
  }

  async logoutUser() {
    this.userService.deleteUser();
    this.tokenService.deleteToken("jwt");
    this.user = null;
    window.location.href = "/";
  }
}
