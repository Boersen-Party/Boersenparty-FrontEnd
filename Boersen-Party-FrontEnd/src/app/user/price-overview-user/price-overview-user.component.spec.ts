import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOverviewUserComponent } from './price-overview-user.component';

describe('PriceOverviewComponent', () => {
  let component: PriceOverviewUserComponent;
  let fixture: ComponentFixture<PriceOverviewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceOverviewUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceOverviewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
