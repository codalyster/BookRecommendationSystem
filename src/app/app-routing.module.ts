import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDesktop } from "./pages/HomeDesktop/HomeDesktop.component";
export const routes: Routes = [
  {
    path: "",
    component: HomeDesktop,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
