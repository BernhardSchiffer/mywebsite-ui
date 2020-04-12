import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user-service/user.service";
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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  loginUser(event) {
    event.preventDefault();
    const myForm = document.forms["login"];
    
    this.authService.login(this.email, this.password)
      .then(() => myForm.reset());

    return false;
  }

  logoutUser() {
    this.authService.logout();
    this.user = null;
  }
}
