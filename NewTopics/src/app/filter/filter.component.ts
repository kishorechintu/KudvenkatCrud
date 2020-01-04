import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
  public name = 'chintu';
  @Output() getEvent = new EventEmitter();
  public callParent(){
    this.getEvent.emit(this.name);
  }

}
