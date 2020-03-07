import { TestBed } from '@angular/core/testing';

import { ArchitectInfoService } from './architect-info.service';

describe('ArchitectInfoService', () => {
  let service: ArchitectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchitectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
