import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
