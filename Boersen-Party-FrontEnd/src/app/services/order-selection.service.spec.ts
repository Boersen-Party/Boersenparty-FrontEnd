import { TestBed } from '@angular/core/testing';

import { OrderSelectionService } from './order-selection.service';

describe('OrderSelectionService', () => {
  let service: OrderSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
