import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { RegistrationService } from "../../services/registration/registration.service";
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

  register(event) {
    event.preventDefault();
    const myForm = document.forms["register"];
    const newUser = new User(this.username, this.email);

    this.registrationService
      .registerNewUser(newUser, this.password)
      .then(() => {
        myForm.reset();
        this.router.navigateByUrl("profile");
      })
      .catch();

    return false;
  }
}
