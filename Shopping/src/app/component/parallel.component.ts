import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs-compat';
import {HttpErrorResponse} from '@angular/common/http';
import { CustomersService } from '../services/customers.service';
import { CountriessService } from '../services/countriess.service';


@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: []
})
export class ParallelComponent implements OnInit {

  private res_one:any;
  private res_two:any;
  public records:any[]=[];

  constructor( private service_one:CustomersService,private service_two:CountriessService) { }

  public errCallBack = (errRes:HttpErrorResponse)=>{
    if(errRes.error instanceof Error){
      console.log("client Side Errors");
    }else{
      console.log("server side errors");
    }
  }

  ngOnInit() {
    Observable.forkJoin(
      [this.service_one.getCustomers(),
      this.service_two.getCountries()]
      ).subscribe((postRes)=>{
        this.res_one=postRes[0];
        this.records.push(this.res_one.records);

        this.res_two=postRes[1];
      },this.errCallBack);
  }
 

}
