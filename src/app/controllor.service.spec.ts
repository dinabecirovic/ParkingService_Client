import { TestBed } from '@angular/core/testing';

import { ControllorService } from './controllor.service';

describe('ControllorService', () => {
  let service: ControllorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
