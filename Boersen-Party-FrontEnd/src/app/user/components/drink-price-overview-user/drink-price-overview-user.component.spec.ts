import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPriceOverviewUserComponent } from './drink-price-overview-user.component';

describe('PriceOverviewComponent', () => {
  let component: DrinkPriceOverviewUserComponent;
  let fixture: ComponentFixture<DrinkPriceOverviewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkPriceOverviewUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkPriceOverviewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
