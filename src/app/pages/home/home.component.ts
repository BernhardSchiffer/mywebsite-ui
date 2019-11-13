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
    /*
    const banner: HTMLPictureElement = document.getElementById("banner");
    const pics: HTMLCollectionOf<Elem> = document.getElementsByClassName("bannerpic");
    let pic: HTMLSourceElement = pics.;
    for (let x = 0; x <= pics.length; x++) {
      let pic: HTMLSourceElement = pics.item(x) as HTMLSourceElement;
      pic.srcset =
        "../../assets/funztcoolbanner" +
        Math.floor(Math.random() * 6) +
        ".webp";
    }*/
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
