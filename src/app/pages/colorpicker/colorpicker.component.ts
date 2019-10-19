import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colorpicker",
  templateUrl: "./colorpicker.component.html",
  styleUrls: ["./colorpicker.component.css"]
})
export class ColorpickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeColor(event: any) {
    let colorpicker = document.getElementById("colorpicker");
    let color = event.target.value;
    colorpicker.style.setProperty("--bgcolor", color);
  }
}
