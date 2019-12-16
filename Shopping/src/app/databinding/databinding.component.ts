import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  public Product ={
    Name:'Samsung Tv',
    Price: 45000.32,
    Qty:2,
    Mfd:new Date(),
    InStock: true
  }

  public Total(){
    return this.Product.Price * this.Product.Qty;
  }
  public InStock(){
    return (this.Product.InStock==true)?"Available":"OUt of Stock"
  }

}
