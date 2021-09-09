import { TestBed } from '@angular/core/testing';

import { MonthEntryService } from './month-entry.service';

describe('MonthEntryService', () => {
  let service: MonthEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
