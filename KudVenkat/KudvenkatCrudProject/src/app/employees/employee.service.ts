import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable, throwError, of } from "rxjs";
import { delay } from "rxjs/internal/operators";
import { catchError } from "rxjs/internal/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}
  baseUrl = "http://localhost:3000/employees";
  // private listEmployees: Employee[] = [
  //   {
  //     id: 1,
  //     name: "Kishore",
  //     gender: "Male",
  //     contactPreference: "Email",
  //     email: "Kishore.p29@gmail.com",
  //     dateOfBirth: new Date("10/25/1993"),
  //     department: "2",
  //     isActive: true,
  //     photoPath: "assets/images/emp1.png"
  //   },
  //   {
  //     id: 2,
  //     name: "Chinni",
  //     gender: "FeMale",
  //     contactPreference: "Email",
  //     email: "Chinni@pragimtech.com",
  //     dateOfBirth: new Date("07/29/1995"),
  //     department: "1",
  //     isActive: true,
  //     photoPath: "assets/images/emp2.png"
  //   },
  //   {
  //     id: 3,
  //     name: "Kumar",
  //     gender: "Male",
  //     contactPreference: "Email",
  //     email: "Kumar@pragimtech.com",
  //     dateOfBirth: new Date("02/5/1996"),
  //     department: "3",
  //     isActive: true,
  //     photoPath: "assets/images/emp3.png"
  //   }
  // ];
  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.baseUrl);
  }
  getEmployee(id: number): Observable<Employee> {
    // return this.listEmployees.find(e => e.id === id);
    return this._httpClient
      .get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
    // this.listEmployees.push(employee);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    // const maxid = this.listEmployees.reduce(function(e1, e2) {
    //   return e1.id > e2.id ? e1 : e2;
    // }).id;
    // employee.id = maxid + 1;
    return this._httpClient
      .post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .pipe(catchError(this.handleError));
    // this.listEmployees.push(employee);
  }
  updateEmployee(employee: Employee): Observable<void> {
    return this._httpClient
      .put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .pipe(catchError(this.handleError));
    // this.listEmployees.push(employee);
  }
  deleteEmployee(id: number): Observable<void> {
    // const i = this.listEmployees.findIndex(e => e.id === id);
    // if (i !== -1) {
    //   this.listEmployees.splice(i, 1);
    // }
    return this._httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("client side Error", errorResponse.error.message);
    } else {
      console.log("Server side Error", errorResponse);
    }
    return throwError("Error on server", errorResponse.error);
  }
}
