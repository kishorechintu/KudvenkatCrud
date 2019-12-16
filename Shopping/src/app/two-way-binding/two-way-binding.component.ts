import { Component} from '@angular/core';


@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

 public name;
 public price;
 public qty;
 public isInStock;
 public shippedTo;

}
