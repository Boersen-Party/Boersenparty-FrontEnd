import { TestBed } from '@angular/core/testing';

import { PartyChartService } from './party-chart.service';

describe('PartyChartService', () => {
  let service: PartyChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
