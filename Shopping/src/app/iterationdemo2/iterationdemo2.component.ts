import { Component } from '@angular/core';

@Component({
  selector: 'app-iterationdemo2',
  templateUrl: './iterationdemo2.component.html',
  styleUrls: ['./iterationdemo2.component.css']
})
export class Iterationdemo2Component {
 
  public products =[
    {
      Name : 'Samsung Tv',Photo :'assets/tv.jpg',likes :0,dlikes :0
    },
    {
      Name : 'Watch',Photo :'assets/watch.jpg',likes :0,dlikes :0
    }
  ];

  public likes(product){
    product.likes++
  }
  public dlikes(product){
    product.dlikes++
  }

}
