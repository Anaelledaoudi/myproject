import { TestBed } from '@angular/core/testing';

import { ImagesConvertService } from './images-convert.service';

describe('ImagesConvertService', () => {
  let service: ImagesConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
