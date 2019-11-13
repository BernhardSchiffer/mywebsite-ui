import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user-service/user.service";
import { TokenService } from "../../services/token-service/token.service";
import { AuthService } from "src/app/services/auth-service/auth.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
  styleUrls: ["./user-dropdown.component.css"]
})
export class UserDropdownComponent implements OnInit {
  user: User = null;
  email: string = "";
  password: string = "";

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  async loginUser(event) {
    event.preventDefault();
    let myForm = document.forms["login"];

    this.user = await this.authService.login(this.email, this.password);

    myForm.reset();
    return false;
  }

  async logoutUser() {
    this.userService.deleteUser();
    this.tokenService.deleteToken("jwt");
    this.user = null;
  }
}
