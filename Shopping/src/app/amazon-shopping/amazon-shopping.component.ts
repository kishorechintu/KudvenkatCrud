import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-shopping',
  templateUrl: './amazon-shopping.component.html',
  styleUrls: ['./amazon-shopping.component.css']
})
export class AmazonShoppingComponent{

  public categories=['Select Categories','Electronics','Shoe']
  public Electronics=['Samsung Tv','Mobile','Watch']
  public Shoe=['Nike','Bata','Lee Cooper']

  public productData=[
    {
      
    }
  ]
  

}
