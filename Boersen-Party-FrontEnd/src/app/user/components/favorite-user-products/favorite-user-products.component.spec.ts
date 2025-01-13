import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteUserProductsComponent } from './favorite-user-products.component';

describe('FavoriteUserProductsComponent', () => {
  let component: FavoriteUserProductsComponent;
  let fixture: ComponentFixture<FavoriteUserProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteUserProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteUserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
