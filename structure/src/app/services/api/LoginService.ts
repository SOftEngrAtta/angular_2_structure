import { Injectable } from "@angular/core";
import { ApiService } from "./ApiService";

@Injectable()
export class LoginService {
  constructor(private api: ApiService) {}
  Login(model: any) {
    return this.api.Post("Admin/Login", model);
  }
}
