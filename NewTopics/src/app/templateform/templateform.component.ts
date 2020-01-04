import { Component} from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  {

  public submitClick(formData){
    alert(formData.uname)
  }
 

}
