import { TestBed } from '@angular/core/testing';

import { ApiLatService } from './api-lat.service';

describe('ApiLatService', () => {
  let service: ApiLatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
