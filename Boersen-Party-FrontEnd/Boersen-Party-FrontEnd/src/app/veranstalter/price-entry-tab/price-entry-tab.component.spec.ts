import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEntryTabComponent } from './price-entry-tab.component';

describe('PriceEntryTabComponent', () => {
  let component: PriceEntryTabComponent;
  let fixture: ComponentFixture<PriceEntryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceEntryTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceEntryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
