import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WeatherInformationComponent} from './weather-information/weather-information.component';
import {SearchCityInputComponent} from './search-city-input/search-city-input.component';

const routes: Routes = [
  {path: '', component: SearchCityInputComponent},
  {path: 'forecast', component: WeatherInformationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
