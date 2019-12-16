import { Component} from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

public Product =[
 
{
  categories : 'Electronics', products : ['Samsung Tv','Mobile']
},
{
  categories :'Shoes', products : ['Nike','Lee Cooper']
}

]

}
