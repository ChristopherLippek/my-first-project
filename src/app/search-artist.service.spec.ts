import { TestBed } from '@angular/core/testing';

import { SearchArtistService } from './search-artist.service';

describe('SearchArtistService', () => {
  let service: SearchArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
