import { TestBed } from '@angular/core/testing';

import { ParkingplacesService } from './parkingplaces.service';

describe('ParkingplacesService', () => {
  let service: ParkingplacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingplacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
