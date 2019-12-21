import { Component} from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {

  employees:any[];
    
  constructor(){
  this.employees =[
    {code:'emp01', name: 'Tom', gender: 'Male', anualSalary:5500 ,dob : "07/29/1990"},
    {code:'emp02', name: 'Kishore', gender: 'Male', anualSalary:7500 ,dob : "06/13/1989"},
    {code:'emp03', name: 'Mary', gender: 'Female', anualSalary:4500 ,dob : "07/12/1998"},
    {code:'emp04', name: 'Kom', gender: 'Female', anualSalary:3500 ,dob : "12/06/2000"},
  ]
}

getTotalEmployees():number{

  return this.employees.length;
}

getTotalMaleEmployees():number{
  return this.employees.filter(x=>x.gender==='Male').length;
}

getTotalFemaleEmployees():number{
  return this.employees.filter(x=>x.gender==='Female').length;
}
}
