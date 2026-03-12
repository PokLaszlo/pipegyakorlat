import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private readonly smartCityDevices = [
  { 
    id: 1, 
    identifier: "SC-LIGHT-088", 
    energyDemand: "Alacsony (15W fényszenzorral)", 
    status: "Optimális üzemmód (98%)", 
    location: "Központi Park, Északi sétány" 
  },
  { 
    id: 2, 
    identifier: "WASTE-BIN-V3", 
    energyDemand: "Minimális (Napelemes töltés)", 
    status: "Ürítésre vár (90% telítettség)", 
    location: "Városközpont, Bevásárló utca" 
  },
  { 
    id: 3, 
    identifier: "TRAFFIC-CAM-01", 
    energyDemand: "Közepes (45W folyamatos)", 
    status: "Hardverhiba (Lencse homályos)", 
    location: "Fő út és Sugárút kereszteződés" 
  },
  { 
    id: 4, 
    identifier: "EV-CHARGE-A12", 
    energyDemand: "Magas (50kW gyorstöltő)", 
    status: "Szabad (Használatra kész)", 
    location: "P+R Parkoló, Nyugati szektor" 
  },
  { 
    id: 5, 
    identifier: "DRONE-PAD-X5", 
    energyDemand: "Változó (Töltéskor 200W)", 
    status: "Aktív (Kiszállítás folyamatban)", 
    location: "Logisztikai Negyed, Tetőterasz" 
  },
  { 
    id: 6, 
    identifier: "AIR-QUAL-SENS", 
    energyDemand: "Igen alacsony (Li-ion elem)", 
    status: "Kritikus (Szenzor kalibrálás)", 
    location: "Ipari Park, 4-es számú kapu" 
  },
  { 
    id: 7, 
    identifier: "WATER-MONITOR", 
    energyDemand: "Passzív (Áramlás hajtja)", 
    status: "Működő (Nincs szivárgás)", 
    location: "Lakótelep, Főnyomóvezeték" 
  },
  { 
    id: 8, 
    identifier: "PUBLIC-WIFI-6", 
    energyDemand: "Közepes (60W router)", 
    status: "Túlterhelt (250+ csatlakozás)", 
    location: "Egyetemi tér, Könyvtár előtt" 
  },
  { 
    id: 9, 
    identifier: "SMART-BENCH-02", 
    energyDemand: "Önellátó (Ülőfelület napelemes)", 
    status: "Rongálás (Kijelző betörve)", 
    location: "Duna-parti korzó, Déli szakasz" 
  },
  { 
    id: 10, 
    identifier: "AUTO-SHUTTLE-B", 
    energyDemand: "Igen magas (Nagy kapacitás)", 
    status: "Depóban (Szoftverfrissítés)", 
    location: "Autonóm buszsáv, 2-es megálló" 
  }
];

getCities(){
  return this.smartCityDevices
}

}
