import { TestBed } from '@angular/core/testing';

import { LikedProductsService } from './liked-products.service';

describe('LikedProductsService', () => {
  let service: LikedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
