import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPriceOverviewUserComponent } from './meal-price-overview-user.component';

describe('MealPriceOverviewUserComponent', () => {
  let component: MealPriceOverviewUserComponent;
  let fixture: ComponentFixture<MealPriceOverviewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPriceOverviewUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPriceOverviewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
