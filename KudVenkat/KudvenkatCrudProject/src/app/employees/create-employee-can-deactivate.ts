import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivateGuard
  implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.CreateEmployeeForm.dirty) {
      return confirm("Are u sure You want ot Discard your Changes");
    }
    return true;
  }
}
