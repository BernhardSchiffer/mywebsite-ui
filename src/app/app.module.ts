import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { UserDropdownComponent } from "./components/user-dropdown/user-dropdown.component";
import { HomeComponent } from "./pages/home/home.component";
import { ColorpickerComponent } from "./pages/colorpicker/colorpicker.component";
import { NormalLayoutComponent } from "./pages/normal-layout/normal-layout.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { LoginComponent } from "./pages/login/login.component";
import { DatenschutzComponent } from "./pages/datenschutz/datenschutz.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { StackComponent } from "./pages/stack/stack.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorpickerComponent,
    NavBarComponent,
    UserDropdownComponent,
    NormalLayoutComponent,
    RegistrationComponent,
    LoginComponent,
    DatenschutzComponent,
    ProfileComponent,
    StackComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
