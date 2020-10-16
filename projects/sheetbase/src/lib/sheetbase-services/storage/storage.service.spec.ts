import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
