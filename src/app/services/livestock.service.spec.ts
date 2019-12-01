import { TestBed } from '@angular/core/testing';

import { LivestockService } from './livestock.service';

describe('LivestockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivestockService = TestBed.get(LivestockService);
    expect(service).toBeTruthy();
  });
});
