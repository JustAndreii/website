import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarinerComponent } from './submariner';

describe('Submariner', () => {
  let component: SubmarinerComponent;
  let fixture: ComponentFixture<SubmarinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmarinerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmarinerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
