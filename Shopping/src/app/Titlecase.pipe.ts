import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'titlecase'
})
export class TitlecasePipe implements PipeTransform{
    transform(str){
        let lwr = str.toLocaleLowerCase();
        let strarr = lwr.split(" ");
        for(var i=0;i<strarr.length;i++){
            strarr[i]=strarr[i][0].toUpperCase()+strarr[i].slice(1);
        }
        return strarr;
    }
}