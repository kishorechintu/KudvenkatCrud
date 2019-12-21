import { Component} from '@angular/core';

@Component({
  selector: 'app-ngforcard',
  templateUrl: './ngforcard.component.html',
  styleUrls: ['./ngforcard.component.css']
})
export class NgforcardComponent  {
  public cartItem=
    {
      Name:"",Price:0,Photo:""
    };
public cartItems = [];

public products=[
  {
    Name : 'Samsung Tv',Price :45000.45,Photo :'assets/tv.jpg'
  },
  {
    Name :'Mobile',Price :15000.34,Photo :'assets/mobile.jpg'
  },
   
];
  public addProduct(){
    this.products = [
      {
        Name : 'Samsung Tv',Price :45000.45,Photo :'assets/tv.jpg'
      },
      {
        Name :'Mobile',Price :15000.34,Photo :'assets/mobile.jpg'
      },
      {
        Name :'Watch ',Price :1200.32,Photo :'assets/watch.jpg'
      }

    ];

  }

  public TrackById(index,product)
  {
    return product.Id;
  }

  public addToCart(index){
    
    this.cartItem={
      Name:this.products[index].Name,
      Price:this.products[index].Price,
      Photo:this.products[index].Photo
  
    }
    this.cartItems.push(this.cartItem);
   

  }
  public deleteFromCart(index){
    this.cartItems.splice(index,1);
  }
}
