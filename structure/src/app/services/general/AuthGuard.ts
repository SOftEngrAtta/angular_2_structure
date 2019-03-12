import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { StorageService } from "./StorageService";
import { TokenModel, UserRole } from "../models";

@Injectable()
export class AuthGuard implements CanActivate {
  loggedInUser: TokenModel;
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    console.log("Url:" + url);
    const token = this.storageService.Get("mltoken");
    if (token != null) {
      if (url === "/") {
        if (token.CurrentUser.Role === UserRole.Admin) {
          this.router.navigate(["/admin/dashboard"]);
          return false;
        } else {
          this.router.navigate(["/not-found"]);
          return false;
        }
      } else {
        const role = route.data["role"] as Array<number>;
        const access = role.some(e => e === token.CurrentUser.UserRole);
        if (access) {
          return true;
        } else {
          this.router.navigate(["/not-found"]);
          console.log("Unauthorized to open link: " + state.url);
          return false;
        }
      }
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }
}
