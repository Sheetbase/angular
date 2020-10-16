import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('PropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: PropertyService = TestBed.get(PropertyService);
    expect(service).toBeTruthy();
  });
});
