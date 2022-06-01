import { TestBed } from '@angular/core/testing';

import { ScootyService } from './scooty.service';

describe('ScootyService', () => {
  let service: ScootyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScootyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
