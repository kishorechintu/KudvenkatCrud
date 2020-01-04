import { Component,OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent  {

  public products = [];
  constructor(private data:ProductdataService){

  }
  ngOnInit(){
    this.products = this.data.GenerateData();
  }



public allCount = this.products.length;
public electronicsCount = this.products.filter(x=>x.Category=='Electronics').length;
public shoeCount =  this.products.filter(x=>x.Category=='Shoes').length;

public selectedCategoryValue = 'All';
public categoryChanged(selectedCategoryName){
  this.selectedCategoryValue = selectedCategoryName;
  
}


}
