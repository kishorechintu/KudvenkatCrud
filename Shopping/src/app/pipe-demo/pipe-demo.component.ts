import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  public searchName;
 public msg = "hi hOw aRe You";
 public Players = [
   {Name : 'Kohli', Team :'India' , DOB :"2019-01-16"},
   {Name : 'Sachin', Team :'India' , DOB :new Date('1981-05-18')},
   {Name : 'Kapil Dev', Team :'India' , DOB :new Date('1980-07-23')},
   {Name : 'Jadeja', Team :'Australia' , DOB :new Date('1984-12-30')},
   {Name : 'Malinga', Team :'Srilanka' , DOB :new Date('1986-03-11')},
   {Name : 'Ganguly', Team :'India' , DOB :new Date('1989-04-14')},

 ];

}
