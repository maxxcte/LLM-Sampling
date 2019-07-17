import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDatesComponent } from './all-dates.component';

describe('AllDatesComponent', () => {
  let component: AllDatesComponent;
  let fixture: ComponentFixture<AllDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
