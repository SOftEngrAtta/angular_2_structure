import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./services/general";
import { UserRole } from "./services/models";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./admin/admin.module#AdminModule",
    // canActivate: [AuthGuard],
    data: {
      role: [UserRole.Admin]
    }
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "not-found",
    loadChildren: "./not-found/not-found.module#NotFoundModule"
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
