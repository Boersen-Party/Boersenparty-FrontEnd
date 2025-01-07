import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPriceEntryTabComponent } from './user-price-entry-tab.component';

describe('UserPriceEntryTabComponent', () => {
  let component: UserPriceEntryTabComponent;
  let fixture: ComponentFixture<UserPriceEntryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPriceEntryTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPriceEntryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
