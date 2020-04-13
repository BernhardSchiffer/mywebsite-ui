import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user-service/user.service";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { Router, ActivatedRoute } from '@angular/router';

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
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  loginUser(event) {
    event.preventDefault();
    const myForm = document.forms["login"];
    
    this.authService
      .login(this.email, this.password)
      .then(() => {
        myForm.reset();
        const returnUrl = this.route.snapshot.queryParams.returnUrl || this.router.url;
        this.router.navigateByUrl(returnUrl)
      })
      .catch();

    return false;
  }

  logoutUser() {
    this.authService.logout();
    this.user = null;
  }
}
