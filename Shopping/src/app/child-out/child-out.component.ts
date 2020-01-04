import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-out',
  templateUrl: './child-out.component.html',
  styleUrls: ['./child-out.component.css']
})
export class ChildOutComponent  {

 
 @Input() public username = "";
 @Input() public password = "";

}
