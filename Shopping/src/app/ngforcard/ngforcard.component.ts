import { Component} from '@angular/core';

@Component({
  selector: 'app-ngforcard',
  templateUrl: './ngforcard.component.html',
  styleUrls: ['./ngforcard.component.css']
})
export class NgforcardComponent  {

public products=[
  {
    Name : 'Samsung Tv',Price :45000.45,Photo :'assets/tv.jpg'
  },
  {
    Name :'Mobile',Price :15000.34,Photo :'assets/mobile.jpg'
  },
  {
    Name :'Shoe',Price :2000.45,Photo :'assets/shoe.jpg'
  },
  {
    Name :'Watch',Price :1500.21,Photo :'assets/watch.jpg'
  }

  
]
}
