import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ColorpickerComponent } from "./pages/colorpicker/colorpicker.component";
import { NormalLayoutComponent } from "./pages/normal-layout/normal-layout.component";
import { DatenschutzComponent } from "./pages/datenschutz/datenschutz.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuardService } from "./services/auth-guard/auth-guard.service";
import { ProfileComponent } from "./pages/profile/profile.component";
import { StackComponent } from "./pages/stack/stack.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    component: NormalLayoutComponent,
    children: [
      { path: "privacy", component: DatenschutzComponent },
      { path: "stack", component: StackComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      {
        path: "profile",
        canActivate: [AuthGuardService],
        component: ProfileComponent
      }
    ]
  },
  { path: "colorpicker", component: ColorpickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
