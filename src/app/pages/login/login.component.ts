import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth-service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  returnUrl: "";
  email: "";
  password: "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
  }

  async loginUser(event) {
    event.preventDefault();
    let myForm = document.forms["loginform"];

    let user = await this.authService.login(this.email, this.password);

    if (user) {
      myForm.reset();
      this.router.navigateByUrl(this.returnUrl);
    }
    return false;
  }
}
