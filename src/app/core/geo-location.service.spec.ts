import {TestBed, getTestBed} from '@angular/core/testing';

import {GeoLocationService} from "./geo-location.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {IGeoLocationApiResponse} from "../store/interfaces/IGeoLocationApiResponse";
let injector: TestBed;
let geolocationservice: GeoLocationService;
let httpMock: HttpTestingController;

describe('GeoLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoLocationService, HttpClientModule]
    });
    injector = getTestBed();
    geolocationservice = injector.get(GeoLocationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('GeoLocationService should be created', () => {
    expect(GeoLocationService).toBeDefined();

  });
  it('should call get method', () => {

    geolocationservice.fetchGeoLocation('google.com').subscribe((geoLocationInfo: IGeoLocationApiResponse) => {
      expect(geoLocationInfo.ip).toBe('2607:f8b0:405:80a::200e');
    });

    const req = httpMock.expectOne('http://api.ipstack.com/google.com?access_key=0d5fd0f40d64d2aa780679cfc11d578b');
    expect(req.request.method).toBe("GET");
  });
});
