import { TestBed } from '@angular/core/testing';

import { GetsportsService } from './getsports.service';

describe('GetsportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetsportsService = TestBed.get(GetsportsService);
    expect(service).toBeTruthy();
  });
});
