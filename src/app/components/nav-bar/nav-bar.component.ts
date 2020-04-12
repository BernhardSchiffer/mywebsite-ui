import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user-service/user.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  @Input() navTitle: string;
  dropdown: any;
  isOpen: boolean = false;
  user: User = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dropdown = document.getElementById("userdropdown");
    this.user = this.userService.getUser();
  }

  showLogin() {
    this.dropdown.classList.remove("hide");
  }

  hideLogin() {
    this.dropdown.classList.add("hide");
  }

  openNav() {
    this.isOpen = !this.isOpen;
  }

  onLogout() {
    this.user = this.userService.getUser();
  }

  onLogin() {
    this.user = this.userService.getUser();
  }
}
