import { Component } from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css']
})
export class IterationdemoComponent {

  public txtName = "";
  public txtPrice = "";
  public newProduct = {
    Name : "",
    Price : ""
  } 

 public products = [
   {
     Name : 'Samsung Tv', Price :'160000.34'
   },
   {
     Name : 'Mobile', Price : '15000.32' 
   },
   {
     Name :'Watch', Price :'1200' 
   }
 ]; 

 public addProduct(){
if((this.txtName && this.txtPrice)!="")
{
  this.newProduct = {
    Name:this.txtName,
    Price:this.txtPrice
  }

  this.products.push(this.newProduct);
  this.txtName = "";
  this.txtPrice = "";
  }
 
 }
 public deleteProduct(index){
   let status=confirm('Do you want to delete');
   if(status==true)
   {
    this.products.splice(index,1);
   }
   
 }
}
