import { Component, inject } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { CityService } from '../shared/city.service';
import { CityFilterPipe } from '../shared/pipe/city-filter-pipe';

@Component({
  selector: 'app-city',
  imports: [ReactiveFormsModule,CityFilterPipe],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {
  data = inject(CityService).getCities()
  builder = inject(FormBuilder)

  filteringForm = this.builder.group({
    id:"",
    identifier:"",
    energyDemand:"",
    status:"",
    location:""
  })
  
  ngOnInit(){
    this.data
  }
}
