import { TestBed } from '@angular/core/testing';

import { CusauthGuard } from './cusauth.guard';

describe('CusauthGuard', () => {
  let guard: CusauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CusauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
