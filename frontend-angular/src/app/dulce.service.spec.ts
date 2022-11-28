import { TestBed } from '@angular/core/testing';

import { DulceService } from './dulce.service';

describe('DulceService', () => {
  let service: DulceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DulceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
