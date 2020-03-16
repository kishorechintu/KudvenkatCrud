import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../models/employee.model";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-display-employee",
  templateUrl: "./display-employee.component.html",
  styleUrls: ["./display-employee.component.css"]
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  public selectedEmployeeId: number;
  confirmDelete = false;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  // @Input()
  // set employee(val: Employee) {
  //   console.log(
  //     "previous employee   " + (this._employee ? this._employee.name : "NULL")
  //   );
  //   console.log("Curent emp name   " + val.name);
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get("id");
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;
  //   console.log(
  //     "Previous :" + (previousEmployee ? previousEmployee.name : "NULL")
  //   );
  //   console.log("Current :" + currentEmployee.name);
  // }
  // handleClick() {
  //   this.notify.emit(this.employee);
  // }
  viewEmployee() {
    this._router.navigate(["/employees", this.employee.id]);
  }
  editEmployee() {
    this._router.navigate(["/edit", this.employee.id]);
  }
  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => {
        console.log(`Employee with Id= ${this.employee.id} Deleted..`);
      },
      err => {}
    );
    this.notifyDelete.emit(this.employee.id);
  }
}
