import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtPepsiComponent } from './gmt-pepsi';

describe('GmtPepsi', () => {
  let component: GmtPepsiComponent;
  let fixture: ComponentFixture<GmtPepsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmtPepsiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GmtPepsiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
