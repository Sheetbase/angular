import { TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('CacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: CacheService = TestBed.get(CacheService);
    expect(service).toBeTruthy();
  });
});
