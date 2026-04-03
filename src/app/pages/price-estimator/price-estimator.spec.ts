import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEstimatorComponent } from './price-estimator';

describe('PriceEstimator', () => {
  let component: PriceEstimatorComponent;
  let fixture: ComponentFixture<PriceEstimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceEstimatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceEstimatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
