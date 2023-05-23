import { TestBed } from '@angular/core/testing';

import { CreateTenderService } from './create-tender.service';

describe('CreateTenderService', () => {
  let service: CreateTenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
