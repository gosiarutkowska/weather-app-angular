import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AgmCoreModule} from '@agm/core';
import {SearchCityInputComponent} from './search-city-input/search-city-input.component';
import {WeatherInformationComponent} from './weather-information/weather-information.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

const components = [
  AppComponent,
  SearchCityInputComponent,
  WeatherInformationComponent
];


@NgModule({
  declarations: [
    components,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'place-for-api-key',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
