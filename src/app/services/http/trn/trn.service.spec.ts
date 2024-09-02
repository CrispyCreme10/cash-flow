import { TestBed } from '@angular/core/testing';

import { TrnHttpService } from './trn.service';

describe('TrnService', () => {
  let service: TrnHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrnHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
