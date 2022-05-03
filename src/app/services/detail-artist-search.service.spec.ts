import { TestBed } from '@angular/core/testing';

import { DetailArtistSearchService } from './detail-artist-search.service';

describe('DetailArtistSearchService', () => {
  let service: DetailArtistSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailArtistSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
