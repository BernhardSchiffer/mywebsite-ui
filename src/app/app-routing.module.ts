import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ColorpickerComponent } from "./pages/colorpicker/colorpicker.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "colorpicker", component: ColorpickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
