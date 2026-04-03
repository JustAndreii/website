import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtComponent } from './gmt';

describe('Gmt', () => {
  let component: GmtComponent;
  let fixture: ComponentFixture<GmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GmtComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
