import { TestBed } from '@angular/core/testing';

import { FarauthGuard } from './farauth.guard';

describe('FarauthGuard', () => {
  let guard: FarauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FarauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
