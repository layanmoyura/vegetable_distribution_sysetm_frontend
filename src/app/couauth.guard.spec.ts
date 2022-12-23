import { TestBed } from '@angular/core/testing';

import { CouauthGuard } from './couauth.guard';

describe('CouauthGuard', () => {
  let guard: CouauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CouauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
