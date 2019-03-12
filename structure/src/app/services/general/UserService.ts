import { Injectable } from "@angular/core";
import { StorageService } from "./StorageService";
import { UserRole, TokenModel, LoggedInModel } from "../models";

@Injectable()
export class UserService {
  tokenModel: TokenModel;
  loggedIn: LoggedInModel;
  constructor(private storageService: StorageService) {}
  CurrentRole(): UserRole {
    this.tokenModel = this.storageService.Get("mltoken");
    return this.tokenModel.CurrentUser.UserRole;
  }
  CurrentToken(): string {
    this.tokenModel = this.storageService.Get("mltoken");
    return this.tokenModel.AccessToken;
  }
  CurrentUser(): LoggedInModel {
    this.tokenModel = this.storageService.Get("mltoken");
    return this.tokenModel.CurrentUser;
  }
}
