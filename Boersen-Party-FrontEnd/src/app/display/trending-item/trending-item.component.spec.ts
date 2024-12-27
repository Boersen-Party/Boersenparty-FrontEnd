import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingItemComponent } from './trending-item.component';

describe('TrendingItemComponent', () => {
  let component: TrendingItemComponent;
  let fixture: ComponentFixture<TrendingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
