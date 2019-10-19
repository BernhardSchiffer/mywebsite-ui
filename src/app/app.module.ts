import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { UserDropdownComponent } from "./components/user-dropdown/user-dropdown.component";
import { HomeComponent } from "./pages/home/home.component";
import { ColorpickerComponent } from "./pages/colorpicker/colorpicker.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorpickerComponent,
    NavBarComponent,
    UserDropdownComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
