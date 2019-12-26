import { Component} from '@angular/core';


@Component({
  selector: 'app-shoppingcart-new',
  templateUrl: './shoppingcart-new.component.html',
  styleUrls: ['./shoppingcart-new.component.css']
})
export class ShoppingcartNewComponent  {

  public category;
  
  public selectedCategory= [];
  public selectedProduct;
  public product = [];
  public name= '';
  public price = '';
  public photo = '';
  public count =1;
  public cartItems = [];
  public isVisible = false;
  public total = 0;
  public categories = ['Select Category','Electronics','Shoes']
  public Electronics = ['Select Prodcut...','Samsung Tv','Watch','Mobile'];
  public Shoes = ['Select Product..','Bata','Nike','Lee Cooper Boot'];
  public productData = [
    {
      Name : 'Samsung Tv' , Price :54000 , Photo :'assets/tv.jpg', Qty :1
    },
    {
      Name : 'Mobile' , Price :15000, Photo :'assets/mobile.jpg' ,Qty:1
    },
    {
      Name : 'Watch' , Price :3200 , Photo :'assets/watch.jpg',Qty :1
    },
    {
      Name : 'Bata' , Price :4300 , Photo :'assets/bata.jpg',Qty:1
    },
    {
      Name : 'Nike' , Price :2300 , Photo :'assets/nike.png',Qty:1
    },
    {
      Name : 'Lee Cooper Boot' , Price :2500, Photo :'assets/Leecooper.jpg',Qty:1
    },
    
  ]

  
  public addProducts(data){
    this.selectedCategory = data;
  }
  public categoryChanged(){

    
    switch(this.category){
      case 'Electronics':
       this.addProducts(this.Electronics)
      break;

      case 'Shoes':
        this.addProducts(this.Shoes)
        break;
    }

  }

  public productCard(){
   this.product = this.productData.filter(x=>x.Name==this.selectedProduct)
  this.name = this.product[0].Name;
  this.price = this.product[0].Price;
  this.photo = this.product[0].Photo;
  }
  
  public totalPrice(){
  }
  
  public addtoCart(){
    
    console.log(this.cartItems);
    
    let index = this.cartItems.findIndex(x=>x.Name==this.product[0].Name);
    if(index>-1)
    {
      // this.count++;
      this.cartItems[index].Qty++;
      
      // console.log(this.product[0].Name + "Exists..")

    }
    else{
    this.cartItems.push(this.product[0])
    this.total = this.total + this.product[0].Price;
    
   
    }

   
    
    
  }

  public deleteCart(index){

    let i = this.cartItems.findIndex(x=>x.Name==this.product[0].Name);
    if(i>-1)
    {
      console.log("entered");
      if(this.cartItems[i].Qty==1){

        console.log("entered into else block")
      let status =  confirm("Are you sure ,Want to delete");

      if(status == true)
      {
        
      this.total = this.total - this.cartItems[index].Price;
      
        this.cartItems.splice(index,1);
      }
    
    
      } else{
        console.log("i value is --"+i)
      this.cartItems[i].Qty--;
      }
      
      // console.log(this.product[0].Name + "Exists..")

    }


    
    // this.total = this.total - this.product[index].Price;
    
    

  }

  public showCart(){
    // this.isVisible = !this.isVisible
    this.isVisible = (this.isVisible)?false : true;
  }
}
