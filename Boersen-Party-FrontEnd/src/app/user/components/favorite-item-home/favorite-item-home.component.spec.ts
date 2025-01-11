import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemHomeComponent } from './favorite-item-home.component';

describe('FavoriteItemHomeComponent', () => {
  let component: FavoriteItemHomeComponent;
  let fixture: ComponentFixture<FavoriteItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteItemHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
