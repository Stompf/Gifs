import { TestBed, inject } from '@angular/core/testing';

import { GiphyService } from './giphy.service';

describe('GiphyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyService]
    });
  });

  it('should be created', inject([GiphyService], (service: GiphyService) => {
    expect(service).toBeTruthy();
  }));
});
