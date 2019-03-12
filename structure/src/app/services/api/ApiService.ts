import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap, catchError } from "rxjs/operators";
import { ResultModel, TokenModel } from "../models";
import { StorageService } from "../general";
import { environment } from "../../../environments/environment";
@Injectable()
export class ApiService {
  protected base: string;
  protected http: HttpClient;
  protected token: TokenModel;
  constructor(private httpclient: HttpClient, private session: StorageService) {
    this.base = environment.baseUrl + "api/";
    this.http = httpclient;
  }
  Save(apiUrl: string, model: any): Observable<ResultModel> {
    return this.http
      .post<any>(this.base + apiUrl, model, { headers: this.GetHeaders() })
      .pipe();
  }
  SaveFormData(apiUrl: string, fromData: FormData): Promise<ResultModel> {
    return this.http
      .post<any>(this.base + apiUrl, fromData, {
        headers: this.GetHeadersFormData()
      })
      .toPromise();
  }
  Post(apiUrl: string, model: any): Observable<HttpResponse<ResultModel>> {
    return this.http
      .post<any>(this.base + apiUrl, model, {
        headers: this.GetHeaders(),
        observe: "response"
      })
      .pipe(tap());
  }
  Update(apiUrl: string, model: any): Observable<ResultModel> {
    return this.http
      .post<any>(this.base + apiUrl, model, { headers: this.GetHeaders() })
      .pipe();
  }
  FindOne(apiUrl: string): Observable<ResultModel> {
    return this.http
      .get<any>(this.base + apiUrl, { headers: this.GetHeaders() })
      .pipe();
  }
  FindAll(apiUrl: string): Observable<ResultModel> {
    return this.http
      .get<any>(this.base + apiUrl, { headers: this.GetHeaders() })
      .pipe();
  }
  FindByParam(apiUrl: string, param: any): Observable<ResultModel> {
    return this.http
      .get<any>(this.base + apiUrl, {
        headers: this.GetHeaders(),
        params: param
      })
      .pipe();
  }
  async FindByParamAsync(apiUrl: string, param: any): Promise<ResultModel> {
    return await this.http
      .get<any>(this.base + apiUrl, {
        headers: this.GetHeaders(),
        params: param
      })
      .toPromise();
  }
  Delete(apiUrl: string, id: number): Observable<ResultModel> {
    return this.http
      .delete<any>(this.base + apiUrl + "/?id=" + id, {
        headers: this.GetHeaders()
      })
      .pipe();
  }
  private GetHeaders(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set(
      "content-type",
      "application/json; charset=utf-8"
    );
    this.token = this.session.Get("mltoken");
    if (this.token != null) {
      httpHeaders = httpHeaders.set("Authorization", this.token.AccessToken);
    }
    return httpHeaders;
  }
  private GetHeadersFormData(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("content-type", "multipart/form-data");
    httpHeaders.append("Accept", "application/json");
    this.token = this.session.Get("mltoken");
    if (this.token != null) {
      httpHeaders = httpHeaders.set("Authorization", this.token.AccessToken);
    }
    return httpHeaders;
  }
}
