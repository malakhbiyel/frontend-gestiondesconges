import { TestBed } from '@angular/core/testing';

import { DemandecheckedService } from './demandechecked.service';

describe('DemandecheckedService', () => {
  let service: DemandecheckedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandecheckedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
