import { Component, OnInit } from "@angular/core";
import { InterceptorService } from "../Services/interceptor.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "interceptor",
  templateUrl: "./interceptor.component.html",
  styles: []
})
export class InterceptorComponent implements OnInit {
  private result: any;
  constructor(private service: InterceptorService) {}

  ngOnInit() {
    this.service.authenticate().subscribe(
      posRes => {
        this.result = posRes;
      },
      (errRes: HttpErrorResponse) => {
        if (errRes.error instanceof Error) {
          console.log("client side error");
        } else {
          console.log("server side error");
        }
      }
    );
  }
}
