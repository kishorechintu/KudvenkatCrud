import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { SelectRequiredValidatorDirective } from "./shared/select-required-validator.directive";
import { ConfirmEqualValidatorDirective } from "./shared/confirm-equal-validator.directive";
import { EmployeeService } from "./employees/employee.service";
import { DisplayEmployeeComponent } from "./employees/display-employee.component";
import { CreateEmployeeCanDeactivateGuard } from "./employees/create-employee-can-deactivate";
import { EmployeeDetailsComponent } from "./employees/employee-details.component";
import { EmployeeFilterPipe } from "./employees/employee.filter.pipe";
import { EmployeeListResolverService } from "./employees/employee.list.resolver.service";
import { PageNotfoundComponent } from "./employees/page-notfound.component";
import { EmployeeDetailsGuardService } from "./employees/employee-details-guard.service";
import { AccordionComponent } from "./shared/accordion.component";
const appRoutes: Routes = [
  {
    path: "list",
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: "edit/:id",
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuard]
  },
  { path: "", redirectTo: "/list", pathMatch: "full" },
  {
    path: "employees/:id",
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  { path: "notfound", component: PageNotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotfoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService,
    CreateEmployeeCanDeactivateGuard,
    EmployeeListResolverService,
    EmployeeDetailsGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
