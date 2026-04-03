import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarinerDateComponent } from './submariner-date';

describe('SubmarinerDate', () => {
  let component: SubmarinerDateComponent;
  let fixture: ComponentFixture<SubmarinerDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmarinerDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmarinerDateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
