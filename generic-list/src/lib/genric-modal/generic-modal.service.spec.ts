import { TestBed } from '@angular/core/testing';

import { GenericModalService } from './generic-modal.service';

describe('GenericModalService', () => {
  let service: GenericModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
