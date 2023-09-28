import { TestBed } from '@angular/core/testing';

import { BlockDataService } from './block-data.service';

describe('BlockDataService', () => {
  let service: BlockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
