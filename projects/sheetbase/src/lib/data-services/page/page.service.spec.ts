import { TestBed } from '@angular/core/testing';

import { PageService } from './page.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: PageService = TestBed.get(PageService);
    expect(service).toBeTruthy();
  });
});
