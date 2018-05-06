import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSquareComponent } from './placeholder-square.component';

describe('PlaceholderSquareComponent', () => {
  let component: PlaceholderSquareComponent;
  let fixture: ComponentFixture<PlaceholderSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
