import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Injector, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { StorageService } from "../general";
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private inj: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const router = this.inj.get(Router);
        const storageService = this.inj.get(StorageService);
        if (error.status === 401) {
          router.navigateByUrl("/login");
          storageService.RemoveItem("mltoken");
        }
        return throwError(error);
      })
    );
  }
}
