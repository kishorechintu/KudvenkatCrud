import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent  {
public styleObject;
public forecolor='black';
public alignment='left';

 public applyEffects(){
this.styleObject={
  'color':this.forecolor, 'text-align' :this.alignment
}
return this.styleObject;

 }
 
}
