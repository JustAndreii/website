import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtBatmanComponent } from './gmt-batman';

describe('GmtBatman', () => {
  let component: GmtBatmanComponent;
  let fixture: ComponentFixture<GmtBatmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmtBatmanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GmtBatmanComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
