import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable()
export class GeoLocationService {

  constructor(private http: HttpClient) {}

  fetchGeoLocation(ip): Observable<Object> {
    return this.http.get('http://api.ipstack.com/' + ip + '?access_key=' + environment.geoipApiKey);
  }
  fetchUserGeoLocation(): Observable<Object> {
    return this.http.get('http://api.ipstack.com/check' + '?access_key=' + environment.geoipApiKey)
  }
}
