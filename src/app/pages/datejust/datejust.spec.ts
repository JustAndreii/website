import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatejustComponent  } from './datejust';

describe('Datejust', () => {
  let component: DatejustComponent;
  let fixture: ComponentFixture<DatejustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatejustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatejustComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
