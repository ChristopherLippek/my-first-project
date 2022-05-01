import { TestBed } from '@angular/core/testing';

import { CountrySearchServiceService } from './country-search-service.service';

describe('CountrySearchServiceService', () => {
  let service: CountrySearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
