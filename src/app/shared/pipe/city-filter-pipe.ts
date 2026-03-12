import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter',
  standalone:true,
  pure:false
})
export class CityFilterPipe implements PipeTransform {

  transform(deviceList: any[], 
    filters:any): any[] {

    if(!deviceList ||!filters){
      return deviceList;
    }
    return deviceList.filter((device)=>{
      return Object.keys(filters).every((key)=>{
        const filterValue = filters[key]
        const deviceValue = device[key]
        if(filterValue == null ||filterValue==undefined||filterValue==""){
          return true
        }
        if(typeof deviceValue === "number"){
          return deviceValue.toString().includes(filterValue.toString())
        }
        if(typeof deviceValue === "string"){
          return deviceValue.toLowerCase().includes(filterValue.toLowerCase())
        }
        return true;
      })
    });
  }

}
