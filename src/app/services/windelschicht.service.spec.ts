import { TestBed } from '@angular/core/testing';

import { WindelschichtService } from './windelschicht.service';

describe('WindelschichtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindelschichtService = TestBed.get(WindelschichtService);
    expect(service).toBeTruthy();
  });
});
