import { TestBed } from '@angular/core/testing';

import { HeaderRouteService } from './header-route.service';

describe('HeaderRouteService', () => {
  let service: HeaderRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
