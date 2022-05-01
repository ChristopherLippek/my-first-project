import { TestBed } from '@angular/core/testing';

import { ArtistServicesService } from './artist-services.service';

describe('ArtistServicesService', () => {
  let service: ArtistServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
