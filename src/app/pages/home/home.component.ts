import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  navbar: any;
  navbarLocation: any;

  constructor() {}

  ngOnInit() {
    this.navbar = document.getElementById("navbar");
    this.navbarLocation = this.navbar.offsetTop;

    const banner = document.getElementById("banner") as HTMLImageElement;
    banner.src =
      "../../assets/funztcoolbanner" + Math.floor(Math.random() * 6) + ".png";
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset >= this.navbarLocation) {
      this.navbar.classList.add("sticky");
    } else {
      this.navbar.classList.remove("sticky");
    }
  }
}
