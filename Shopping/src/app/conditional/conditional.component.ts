import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent{

  public products = [
    {
      Name : 'Samsung Tv', Price :45000.54, Categories : 'Electronics'
    },
    {
      Name : 'Mobie', Price:15000.23, Categories :'Electronics'
    },
    {
      Name : 'Nike ', Price:2000.23, Categories :'Shoes'
    },
    {
      Name : 'Lee cooper', Price:3000.23, Categories :'Shoes'
    },
    
  ];
  public category = '';
   

}
