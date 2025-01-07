import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationTabComponent } from './user-reservation-tab.component';

describe('UserReservationTabComponent', () => {
  let component: UserReservationTabComponent;
  let fixture: ComponentFixture<UserReservationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReservationTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReservationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
