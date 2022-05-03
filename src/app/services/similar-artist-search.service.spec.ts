import { TestBed } from '@angular/core/testing';

import { SimilarArtistSearchService } from './similar-artist-search.service';

describe('SimilarArtistSearchService', () => {
  let service: SimilarArtistSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarArtistSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
