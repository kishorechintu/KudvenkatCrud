import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let currentdate = new Date().getFullYear();
    let birthdate = new Date(value).getFullYear();
    console.log("value is"+value);
    console.log("current year is--"+currentdate);
    console.log("Birth year is--"+birthdate);

     let age = currentdate - birthdate;
     return age;
  }

}
