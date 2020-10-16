import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });
});
