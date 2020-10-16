import { TestBed } from '@angular/core/testing';

import { ThreadService } from './thread.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('ThreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: ThreadService = TestBed.get(ThreadService);
    expect(service).toBeTruthy();
  });
});
