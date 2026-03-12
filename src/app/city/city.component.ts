import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  identifierFilter = new FormControl('')
  cityFilter = new FormControl('')
  energyDemandFilter = new FormControl('')
  statusFilter = new FormControl('')
  
  ngOnInit(){
    this.data
  }
}
