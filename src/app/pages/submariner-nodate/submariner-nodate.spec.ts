import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarinerNodateComponent } from './submariner-nodate';

describe('SubmarinerNodate', () => {
  let component: SubmarinerNodateComponent;
  let fixture: ComponentFixture<SubmarinerNodateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmarinerNodateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmarinerNodateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
