import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
