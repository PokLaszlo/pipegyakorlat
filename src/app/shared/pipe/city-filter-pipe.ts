import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter',
  standalone:true
})
export class CityFilterPipe implements PipeTransform {

  transform(deviceList: any[], 
    filters:{
    idenfitier:string|null;
    energyDemand:string|null;
    status:string|null;
    city:string|null}): any {

    if(!deviceList ||(!filters.idenfitier && !filters.energyDemand && !filters.status && !filters.city)){
      return deviceList;
    }
    return deviceList.filter((device)=>{
      return (
        device.identifier.toLowerCase().includes(filters.idenfitier?.toLowerCase())&&
        device.energyDemand.toLowerCase().includes(filters.energyDemand?.toLowerCase())&&
        device.status.toLowerCase().includes(filters.status?.toLowerCase())&&
        device.location.toLowerCase().includes(filters.city?.toLowerCase())
      )
    });
  }

}
