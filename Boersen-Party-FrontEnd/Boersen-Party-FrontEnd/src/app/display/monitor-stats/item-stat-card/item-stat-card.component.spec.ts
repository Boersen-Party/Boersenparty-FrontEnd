import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatCardComponent } from './item-stat-card.component';

describe('ItemStatCardComponent', () => {
  let component: ItemStatCardComponent;
  let fixture: ComponentFixture<ItemStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemStatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
