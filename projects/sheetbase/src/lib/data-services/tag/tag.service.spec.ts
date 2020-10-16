import { TestBed } from '@angular/core/testing';

import { TagService } from './tag.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('TagService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: TagService = TestBed.get(TagService);
    expect(service).toBeTruthy();
  });
});
