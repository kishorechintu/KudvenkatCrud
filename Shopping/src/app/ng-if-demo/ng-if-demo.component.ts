import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent  {
  public isVisible = false;
  public btnText = 'show';
  public Product = {
    Name : 'Samsung Tv',
    Price : 65000.45,
    Qty :1,
    Photo : '../assets/tv.jpg'
  }
  public displayClick()
  {
    this.isVisible=(this.isVisible==false)?true:false;
    this.btnText=(this.btnText=='show')?'hide':'show';
  }

}
