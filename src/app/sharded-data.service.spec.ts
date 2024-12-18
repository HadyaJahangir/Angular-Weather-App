import { TestBed } from '@angular/core/testing';

import { ShardedDataService } from './sharded-data.service';

describe('ShardedDataService', () => {
  let service: ShardedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShardedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
