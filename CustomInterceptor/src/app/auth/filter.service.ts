//import HTTPRequest
//HttpRequest class used to receive the Requests (HTTP Requests)

//import HTTPHandler
//Http Handler used to bypass the Requests to Server

//import HTTPEvent
//import Observable
//both the classes are used to handle the exceptions raised by interceptors(filters)

import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

//import Injectable
//Injectable class helps to Create the Intercpptors

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//use Injectable
@Injectable({
  providedIn: "root"
})

//export the Class
export class FilterService {
  //Intercept() is the predefined function in Angular
  //Intercept() Method used to Authenticate the HTTP requests
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Add the token to Req Header
    //Creating cloning of Req Object is called as Virtual Dom
    //because of Virtual Dom , Application performance will increased
    const req1 = req.clone({
      setHeaders: {
        token: "KISHORE"
      }
    });
    return handler.handle(req1);
  }
}
