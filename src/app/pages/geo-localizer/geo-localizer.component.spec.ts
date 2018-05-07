import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocalizerComponent } from './geo-localizer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {GlobalActions} from "../../store/global/globalActions";
import { NgReduxTestingModule } from '@angular-redux/store/testing';


describe('GeoLocalizerComponent', () => {
  let component: GeoLocalizerComponent;
  let fixture: ComponentFixture<GeoLocalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocalizerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule, NgReduxTestingModule],
      providers: [GlobalActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
