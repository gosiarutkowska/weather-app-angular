import {Component, EventEmitter, Output} from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-city-input',
  templateUrl: './search-city-input.component.html',
  styleUrls: ['./search-city-input.component.scss']
})
export class SearchCityInputComponent {

  cityToSearch: string;
  state = false;

  @Output() forecastCityEmmit = new EventEmitter<object>();

  constructor(private weatherService: WeatherService, private router: Router) {
  }

  getCityName($event: google.maps.places.PlaceResult) {
    if ($event.address_components.length < 2) {
      this.state = true;
    } else {
      this.getWeather($event);
    }
  }

  private getWeather($event: google.maps.places.PlaceResult) {
    this.weatherService.getWeatherData($event.address_components[0].long_name);
  }

  goToResultPage() {
    this.weatherService.groupData();
    this.router.navigate(['forecast']);
  }
}

