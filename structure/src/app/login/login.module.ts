import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginService } from "../services/api";

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
