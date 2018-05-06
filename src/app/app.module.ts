import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {GeoLocalizerComponent} from './pages/geo-localizer/geo-localizer.component';
import { AllSearchesListComponent } from './components/all-searches-list/all-searches-list.component';
import { MapWithLocationComponent } from './components/map-with-location/map-with-location.component';
import { LocationInfoComponent } from './components/location-info/location-info.component';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {GeoLocationService} from "./core/geo-location.service";
import {StoreModule} from "./store/module";
import { ModalComponent } from './shared/modal/modal.component';
import { PlaceholderSquareComponent } from './shared/placeholder-square/placeholder-square.component';


@NgModule({
  declarations: [
    AppComponent,
    GeoLocalizerComponent,
    AllSearchesListComponent,
    MapWithLocationComponent,
    LocationInfoComponent,
    ModalComponent,
    PlaceholderSquareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [GeoLocationService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
