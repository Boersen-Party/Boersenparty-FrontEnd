import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeableStatsgridComponent } from './swipeable-statsgrid.component';

describe('SwipeableStatsgridComponent', () => {
  let component: SwipeableStatsgridComponent;
  let fixture: ComponentFixture<SwipeableStatsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeableStatsgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeableStatsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
