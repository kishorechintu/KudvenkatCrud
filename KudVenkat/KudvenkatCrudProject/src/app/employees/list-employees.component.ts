import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";

import { Router, ActivatedRoute } from "@angular/router";
import { ResolvedEmployeeList } from "./resolved-employeelist.model";

@Component({
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  dataFromChild: Employee;
  public _searchedTerm;
  error: string;
  get searchedTerm(): string {
    console.log("Searched Term", this._searchedTerm);
    console.log("FilteredEmployees--", this.filteredEmployees);
    return this._searchedTerm;
  }
  set searchedTerm(value: string) {
    this._searchedTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
    console.log("Searched Term", this._searchedTerm);
    console.log("FilteredEmployees--", this.filteredEmployees);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(
      employee =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }
  // employeeToDisplay: Employee;
  // private arrayIndex = 1;
  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolvedData: Employee[] | string = this._route.snapshot.data[
      "employeeList"
    ];
    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
    } else {
      this.error = resolvedData;
    }
    this.filteredEmployees = this.employees;
  }
  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }

  ngOnInit(): void {
    // this.employeeToDisplay = this.employees[0];
  }
  // nextEmployee(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }
  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }
}
