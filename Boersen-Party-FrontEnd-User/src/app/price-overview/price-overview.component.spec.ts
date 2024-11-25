import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOverviewComponent } from './price-overview.component';

describe('PriceOverviewComponent', () => {
  let component: PriceOverviewComponent;
  let fixture: ComponentFixture<PriceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
