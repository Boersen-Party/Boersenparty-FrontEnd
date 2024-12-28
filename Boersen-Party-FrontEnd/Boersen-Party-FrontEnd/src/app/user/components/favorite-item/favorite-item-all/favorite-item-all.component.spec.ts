import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemAllComponent } from './favorite-item-all.component';

describe('FavoriteItemAllComponent', () => {
  let component: FavoriteItemAllComponent;
  let fixture: ComponentFixture<FavoriteItemAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteItemAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteItemAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
