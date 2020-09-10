import { TestBed } from '@angular/core/testing';

import { MegaphoneService } from './megaphone.service';

describe('MegaphoneService', () => {
  let service: MegaphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegaphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
