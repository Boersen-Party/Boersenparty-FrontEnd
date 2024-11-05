import { TestBed } from '@angular/core/testing';

import { PriceEntryService } from './price-entry.service';

describe('PriceEntryService', () => {
  let service: PriceEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
