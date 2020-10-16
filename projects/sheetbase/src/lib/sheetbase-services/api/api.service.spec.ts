import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
