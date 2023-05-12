import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(value:any,term:any ): any {
    console.log("value is : ",value);
    console.log("term is : ",term);
    if(term==null){
      return value;
    }else{
      return value.filter((item:any)=>(item.firstname.includes(term)));
    }
}
}

