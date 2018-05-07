import {TestBed, inject, ComponentFixture} from '@angular/core/testing';

import {GeoLocationService} from "./geo-location.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {IGeoLocationApiResponse} from "../store/interfaces/IGeoLocationApiResponse";

describe('GeoLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoLocationService, HttpClientModule]
    });
  });

  it('GeoLocationService should be created', () => {
    expect(GeoLocationService).toBeDefined();

  });


  it('GeoLocationService fetchGeoLocation should request api.ipstack.com with valid domain and recieve IP address and country name', inject([GeoLocationService], (geoLocationService: GeoLocationService, httpMock: HttpTestingController) => {
    geoLocationService
      .fetchGeoLocation('google.com')
      .subscribe((geoInfo: IGeoLocationApiResponse) => {
        expect(geoInfo.ip).toBe('2607:f8b0:4005:80b::200e');
        expect(geoInfo.country_name).toBe('United States');
      });
  }));

  it('GeoLocationService fetchGeoLocation should request api.ipstack.com with valid IP address and recieve country code and country name', inject([GeoLocationService], (geoLocationService: GeoLocationService, httpMock: HttpTestingController) => {
    geoLocationService
      .fetchGeoLocation('213.180.141.140')
      .subscribe((geoInfo: IGeoLocationApiResponse) => {
        expect(geoInfo.country_code).toBe('PL');
        expect(geoInfo.country_name).toBe('Poland');
      });
  }));

  it('GeoLocationService fetchUserGeoLocation should request api.ipstack.com to recieve users IP address and country name', inject([GeoLocationService], async(geoLocationService: GeoLocationService, httpMock: HttpTestingController) => {
    geoLocationService
      .fetchUserGeoLocation()
      .subscribe((geoInfo: IGeoLocationApiResponse) => {
        expect(geoInfo.ip).toBe(geoInfo.ip);
        expect(geoInfo.country_name).toBe('Poland');
      });
  }));
});
