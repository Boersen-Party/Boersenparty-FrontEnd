import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageSelectorComponent } from './product-image-selector.component';

describe('ProductImageSelectorComponent', () => {
  let component: ProductImageSelectorComponent;
  let fixture: ComponentFixture<ProductImageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
