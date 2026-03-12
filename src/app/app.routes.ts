import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';

export const routes: Routes = [
    {path:"about",component:AboutComponent},
    {path:"home",component:HomeComponent},
    {path:"",component:HomeComponent},
    {path:"city",component:CityComponent},
];
