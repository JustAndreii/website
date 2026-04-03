import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datejust41Component } from './datejust-41';

describe('Datejust41', () => {
  let component: Datejust41Component;
  let fixture: ComponentFixture<Datejust41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datejust41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Datejust41Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
