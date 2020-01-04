import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path :"",redirectTo:'/departments', pathMatch:'full'},
  {path : 'departments',component :DepartmentlistComponent},
  {path :'employees', component :EmployeelistComponent},
  {path : "**", component :PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DepartmentlistComponent,EmployeelistComponent,PagenotfoundComponent];