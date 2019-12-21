import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-shopping',
  templateUrl: './amazon-shopping.component.html',
  styleUrls: ['./amazon-shopping.component.css']
})

export class AmazonShoppingComponent{
  public category;
  public categories=['Electronics','Shoe']
  public Electronics=['Samsung Tv','Mobile','Watch']
  public Shoe=['Nike','Bata','Lee Cooper']
  public item;
  public qty=0;
  public itemName;
  public itemPrice;
  public itemPhoto;
  public cart=[];
  public tableVisible=false;

  public itemData=[
    {
      Name:"Samsung Tv",Price : 34000 , Photo :"assets/tv.jpg"  
    },
    {
        Name:"Mobile",Price :11500, Photo :"assets/mobile.jpg"
    },
    {
        Name:"Lee Cooper",Price:2000,Photo :"assets/Leecooper.jpg"
    },
    {
        Name:"Nike",Price:1500,Photo :"assets/nike.png"
    },
    {
        Name:"Bata",Price:2500,Photo :"assets/bata.jpg"
    },
    {
        Name:"Watch",Price:600,Photo :"assets/watch.jpg"
    }
  ];
  public productData;
 
  public addProducts(data){
      this.productData=data;
  }

  public itemChange(value){
    var product = this.itemData.filter(x=>x.Name == value);
    this.itemName = product[0].Name;
    this.itemPrice = product[0].Price;
    this.itemPhoto = product[0].Photo;
    this.item = product[0];
    
    
  }

  public showTable(){
    this.tableVisible = (this.tableVisible==false)?true:false;
  }
    
  
  public onChange(value){
    switch(value){
      case "Electronics":
        this.addProducts(this.Electronics);
        break;
      case "Shoe":
      this.addProducts(this.Shoe);
      break;
    }
    
  }

  public addtoCart(){

        this.cart.push(this.item);
      
   }
   public removefromCart(index){
     this.cart.splice(index,1);
   }
  
}
