import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorer36Component } from './explorer-36';

describe('Explorer36', () => {
  let component: Explorer36Component;
  let fixture: ComponentFixture<Explorer36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorer36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Explorer36Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
