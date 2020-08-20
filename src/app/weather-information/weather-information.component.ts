import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  @Input() forecastCityInformation;
  data;

  constructor(private weatherService: WeatherService, private router: Router) {
  }

  ngOnInit(): void {
    this.data = this.weatherService.getGroupedForecast();
  }

  newSearch() {
    this.data = [];
    this.router.navigate(['/']);
  }

}
