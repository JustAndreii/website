import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datejust36Component } from './datejust-36';

describe('Datejust36', () => {
  let component: Datejust36Component;
  let fixture: ComponentFixture<Datejust36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datejust36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Datejust36Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
