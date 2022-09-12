import { TestBed } from '@angular/core/testing';

import { ClothingStyleService } from './clothing-style.service';

describe('ClothingStyleService', () => {
  let service: ClothingStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
