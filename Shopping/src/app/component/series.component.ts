import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CountriessService } from '../services/countriess.service';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {

  private res_one:any;
  private res_two:any;

  constructor(private service_one:CustomersService, private service_two:CountriessService) { }

  ngOnInit() {
    this.service_one.getCustomers().subscribe((postres1)=>{
      this.res_one = postres1;

        /****************Second Service Call(Series Call******************************* */
          this.service_two.getCountries().subscribe((postres2)=>{
            this.res_two=postres2;
          })

        /****************************************************************************** */
    },this.errCallBack);
  }


  /***************************Error Handling Function in HTTPClient */
 public errCallBack = (errRes:HttpErrorResponse)=>{
  if(errRes.error instanceof Error){
    console.log("Client Side Error");
  }else{
    console.log("Server Side Error");
  }
 }
}
