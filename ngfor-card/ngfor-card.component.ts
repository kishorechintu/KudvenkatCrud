import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-card',
  templateUrl: './ngfor-card.component.html',
  styleUrls: ['./ngfor-card.component.css']
})
export class NgforCardComponent {

  public products =[
    {Name : 'Samsung Tv', Price :45000.54 , Photo :'assets/tv.jpg'},
    {Name : 'Mobile ', Price : 6500.54, Photo :'assets/mobile.jpg'},
    {Name : 'Shoe', Price :2000.43, Photo : 'assets/nike.png'}

]
 

}
