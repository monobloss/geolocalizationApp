import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import {NgRedux} from "@angular-redux/store";
import {GlobalActions} from "../../store/global/globalActions";

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [NgRedux, GlobalActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have modal visible', () => {
    expect(component.modalVisible).toBeTruthy();
  });
  it('should have modal visibilty inverted', () => {
    component.toggleModal()
    expect(component.modalVisible).toBeFalsy();
    component.toggleModal()
    expect(component.modalVisible).toBeTruthy();

  });
});
