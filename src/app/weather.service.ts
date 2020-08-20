import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {from, of, zip} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  rawData;
  forecast = [];

  getWeatherData(location) {
    return this.http
      .get(`${environment.openWeatherUrl}/forecast?q=${location}&appid=${environment.openWeatherKey}`
      ).subscribe(e => this.rawData = e
      );
  }

  groupData() {
    this.forecast = [];
    const weatherInformationsScratch = [];

    this.rawData.list.forEach((val) => {
      weatherInformationsScratch.push(val);
    });

    from(weatherInformationsScratch).pipe(
      groupBy(date => date.dt_txt.slice(0, 10), p => p.main),
      mergeMap(group => zip(of(group.key), group.pipe(toArray())))
    ).subscribe(data => {
        this.forecast.push(data);
    });
  }

  getGroupedForecast(){
    return this.forecast;
  }

}


