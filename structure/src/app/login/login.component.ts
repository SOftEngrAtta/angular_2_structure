import { Component, OnInit } from "@angular/core";
import { StorageService, ToastrServices } from "../services/general";
import { LoginService } from "../services/api";
import { TokenModel, LoginModel, UserRole } from "../services/models";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  tokenModel: TokenModel;
  login: LoginModel;
  btnLoad: boolean;
  constructor(
    public router: Router,
    private api: LoginService,
    private toastr: ToastrServices,
    private session: StorageService
  ) {
    this.tokenModel = new TokenModel();
    this.login = new LoginModel();
  }

  ngOnInit() {
    this.btnLoad = false;
  }
  onLoggedin() {
    this.btnLoad = true;
    this.api.Login(this.login).subscribe(x => {
      if (x.body.Response) {
        this.tokenModel.AccessToken = x.headers.get("token");
        this.tokenModel.CurrentUser = x.body.Data;
        this.session.Set("mltoken", this.tokenModel);
        this.toastr.ShowSuccess(x.body.Message);
        if (this.tokenModel.CurrentUser.UserRole === UserRole.Admin) {
          this.router.navigate(["/dashboard"]);
        }
      } else {
        this.toastr.ShowError(x.body.Message);
        this.btnLoad = false;
      }
    });
  }
}
