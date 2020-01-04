import { Component, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent  {

 @Input() public AllCount = 0;
 @Input() public ElectronicsCount = 0;
 @Input() public ShoesCount = 0;

 public selectedCategoryValue = 'All';
 
 @Output() public componentChangedEvent : EventEmitter<String> =new EventEmitter<String>();


 public RadioChangedOne(){
  this.componentChangedEvent.emit(this.selectedCategoryValue);
 }
 public RadioChanged(event)
 {
   console.log(event);
   //this.componentChangedEvent.emit(this.selectedCategoryValue);
   
   this.componentChangedEvent.emit(event.target.value);
 }
}
