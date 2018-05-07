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
});
