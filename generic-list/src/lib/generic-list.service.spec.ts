import { TestBed } from '@angular/core/testing';

import { GenericListService } from './generic-list.service';

describe('GenericListService', () => {
  let service: GenericListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
