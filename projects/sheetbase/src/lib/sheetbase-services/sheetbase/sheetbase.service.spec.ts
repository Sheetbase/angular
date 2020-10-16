import { TestBed } from '@angular/core/testing';

import { SheetbaseService } from './sheetbase.service';

describe('SheetbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheetbaseService = TestBed.get(SheetbaseService);
    expect(service).toBeTruthy();
  });
});
