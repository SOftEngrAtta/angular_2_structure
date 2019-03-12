import { Injectable } from "@angular/core";
import { ApiService } from "./ApiService";

@Injectable()
export class SetupService {
  constructor(private api: ApiService) {}
}
