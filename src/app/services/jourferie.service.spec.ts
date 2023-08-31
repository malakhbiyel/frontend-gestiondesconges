import { TestBed } from '@angular/core/testing';

import { JourferieService } from 'src/app/services/jourferie.service';

describe('JourferieService', () => {
  let service: JourferieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourferieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
