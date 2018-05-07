import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInfoComponent } from './location-info.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('LocationInfoComponent', () => {
  let locationinfo: LocationInfoComponent;
  let fixture: ComponentFixture<LocationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationInfoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })

    fixture = TestBed.createComponent(LocationInfoComponent);
    locationinfo = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(locationinfo).toBeTruthy();
  });
});
