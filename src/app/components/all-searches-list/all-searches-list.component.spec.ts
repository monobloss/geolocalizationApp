import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchesListComponent } from './all-searches-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {GlobalActions} from "../../store/global/globalActions";

describe('AllSearchesListComponent', () => {
  let component: AllSearchesListComponent;
  let fixture: ComponentFixture<AllSearchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSearchesListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [NgRedux, GlobalActions]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
