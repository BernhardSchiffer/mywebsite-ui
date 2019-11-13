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

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    component: NormalLayoutComponent,
    children: [
      { path: "datenschutz", component: DatenschutzComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
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
