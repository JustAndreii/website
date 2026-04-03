import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorer2Component } from './explorer-2';

describe('Explorer2', () => {
  let component: Explorer2Component;
  let fixture: ComponentFixture<Explorer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorer2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Explorer2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
