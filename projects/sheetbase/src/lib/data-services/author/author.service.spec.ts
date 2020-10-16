import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('AuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: AuthorService = TestBed.get(AuthorService);
    expect(service).toBeTruthy();
  });
});
