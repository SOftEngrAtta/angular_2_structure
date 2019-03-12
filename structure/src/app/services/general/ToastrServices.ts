import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ToastrServices {
  constructor(private toastrService: ToastrService) {}
  ShowSuccess(msg) {
    this.toastrService.success("", msg);
  }
  ShowWarning(msg) {
    this.toastrService.warning("", msg);
  }
  ShowError(msg) {
    this.toastrService.error("", msg);
  }
  ShowInfo(msg) {
    this.toastrService.info("", msg);
  }
}
