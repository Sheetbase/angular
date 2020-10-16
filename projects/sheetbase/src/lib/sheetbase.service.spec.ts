import { TestBed } from '@angular/core/testing';

import { SheetbaseService } from './sheetbase.service';

describe('SheetbaseService', () => {
  let service: SheetbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
