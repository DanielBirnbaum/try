import { TestBed } from '@angular/core/testing';

import { WildAnimalsService } from './wild-animals.service';

describe('WildAnimalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildAnimalsService = TestBed.get(WildAnimalsService);
    expect(service).toBeTruthy();
  });
});
