import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { RegistrationService } from "src/app/services/registration/registration.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  username: "";
  email: "";
  password: "";

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {}

  async register(event) {
    event.preventDefault();
    let myForm = document.forms["register"];
    let newUser = new User(this.username, this.email);

    this.registrationService
      .registerNewUser(newUser, this.password)
      .then(user => {
        myForm.reset();
        this.router.navigateByUrl("/profile");
      })
      .catch();
    return false;
  }
}
