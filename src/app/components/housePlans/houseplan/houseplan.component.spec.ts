import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseplanComponent } from './houseplan.component';

describe('HouseplanComponent', () => {
  let component: HouseplanComponent;
  let fixture: ComponentFixture<HouseplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
