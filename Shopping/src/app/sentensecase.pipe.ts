import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
name:'sentenseCase'   
})
export class SentenseCase implements PipeTransform{

    transform(str){
        let firstchar = str.charAt(0);
        let restchar = str.substring(1);
        let msg =  firstchar.toUpperCase() + restchar.toLowerCase() ;
        return msg;
    }
}