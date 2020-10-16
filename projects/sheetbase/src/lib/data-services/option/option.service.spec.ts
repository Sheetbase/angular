import { TestBed } from '@angular/core/testing';

import { OptionService } from './option.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('OptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: OptionService = TestBed.get(OptionService);
    expect(service).toBeTruthy();
  });
});
