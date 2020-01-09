import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class InterceptorService {
  constructor(private http: HttpClient) {}

  public authenticate(): Observable<any> {
    return this.http.get("http://localhost:8080/demo");
  }
}
