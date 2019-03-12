import { Component, OnInit } from "@angular/core";
import { LoggedInModel } from "src/app/services/models";
import { UserService } from "src/app/services/general";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userDetail: LoggedInModel;
  constructor(private user: UserService) {
    this.userDetail = new LoggedInModel();
  }
  ngOnInit() {
    this.userDetail = this.user.CurrentUser();
  }
  onLoggedout() {
    localStorage.removeItem("mltoken");
  }
}
