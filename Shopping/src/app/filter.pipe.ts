import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, sname:string):any {
    console.log("sname is--"+sname)
    if(sname=="" || sname==undefined){
      return value;
    }else{
      const playersarray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let teamname:string=value[i].Team;
      console.log("Team Name is--"+teamname);
      if(teamname.startsWith(sname)){
        playersarray.push(value[i]);
      }
    }
    return playersarray;
    }
    
  }

}
