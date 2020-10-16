import { TestBed } from '@angular/core/testing';

import { BundleService } from './bundle.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('BundleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: BundleService = TestBed.get(BundleService);
    expect(service).toBeTruthy();
  });
});
