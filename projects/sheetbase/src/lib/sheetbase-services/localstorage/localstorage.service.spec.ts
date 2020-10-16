import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('LocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    expect(service).toBeTruthy();
  });
});
