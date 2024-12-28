import { TestBed } from '@angular/core/testing';

import { PartyServiceService } from './party-service.service';

describe('PartyServiceService', () => {
  let service: PartyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
