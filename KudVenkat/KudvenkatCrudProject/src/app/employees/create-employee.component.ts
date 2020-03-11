import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../models/department.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Employee } from "../models/employee.model";
import { NullTemplateVisitor, ThrowStmt } from "@angular/compiler";
import { EmployeeService } from "./employee.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild("employeeForm") public CreateEmployeeForm: NgForm;
  public previewPhoto = false;
  panelTitle: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" }
  ];
  constructor(
    private _router: Router,
    private _employeeService: EmployeeService,
    private _route: ActivatedRoute
  ) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        // showWeekNumbers: false,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 12, 1),
        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.getEmployee(id);
    });
  }
  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: "select",
        isActive: null,
        photoPath: null,
        password: null,
        confirmpassword: null
      };
      this.panelTitle = "Create Employee";
      this.CreateEmployeeForm.reset();
    } else {
      debugger;
      this.panelTitle = "Edit Employee";
      // this.employee = Object.assign({}, this._employeeService.getEmployee(id));
      this._employeeService.getEmployee(id).subscribe(
        employee => {
          
          this.employee = employee;
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
  saveEmployee(): void {
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.CreateEmployeeForm.reset();
          this._router.navigate(["/list"]);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.CreateEmployeeForm.reset();
          this._router.navigate(["/list"]);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
  tooglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
