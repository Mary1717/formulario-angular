import { TestBed } from '@angular/core/testing';

import { FavoritePcMarkService } from './favorite-pc-mark.service';

describe('FavoritePcMarkService', () => {
  let service: FavoritePcMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePcMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
