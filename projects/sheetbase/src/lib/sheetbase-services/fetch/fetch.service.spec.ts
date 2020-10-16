import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetch.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('FetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: FetchService = TestBed.get(FetchService);
    expect(service).toBeTruthy();
  });
});
