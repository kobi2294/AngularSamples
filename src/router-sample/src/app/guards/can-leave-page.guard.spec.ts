import { TestBed, async, inject } from '@angular/core/testing';

import { CanLeavePageGuard } from './can-leave-page.guard';

describe('CanLeavePageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLeavePageGuard]
    });
  });

  it('should ...', inject([CanLeavePageGuard], (guard: CanLeavePageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
