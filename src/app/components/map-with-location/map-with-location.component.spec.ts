import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithLocationComponent } from './map-with-location.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('MapWithLocationComponent', () => {
  let component: MapWithLocationComponent;
  let fixture: ComponentFixture<MapWithLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWithLocationComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWithLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
