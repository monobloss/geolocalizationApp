import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { AllSearchesListComponent } from './all-searches-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {GlobalActions} from "../../store/global/globalActions";
import {Observable} from "rxjs/Observable";
import {IAppState} from "../../store/model";
import {StoreModule} from "../../store/module";
import {MockNgRedux} from "@angular-redux/store/lib/testing";


describe('AllSearchesListComponent', () => {
  let allsearcheslist: AllSearchesListComponent;
  let fixture: ComponentFixture<AllSearchesListComponent>;
  let spyConfigureSubStore
  const mockNgRedux: any = {
    configureStore: () => {},
    dispatch: () => {},
    select: () => Observable.of(null),
  };
  NgRedux.instance = mockNgRedux;

  beforeEach(async(() => {
    spyConfigureSubStore = spyOn(MockNgRedux.getInstance(), 'configureSubStore')
      .and.callThrough();

    MockNgRedux.reset();

    TestBed.configureTestingModule({
      declarations: [ AllSearchesListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: NgRedux, useValue: mockNgRedux} , GlobalActions]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchesListComponent);
    allsearcheslist = fixture.componentInstance;
    fixture.detectChanges();
  });

});
