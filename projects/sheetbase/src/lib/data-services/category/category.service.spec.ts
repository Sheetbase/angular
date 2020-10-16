import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('CategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: CategoryService = TestBed.get(CategoryService);
    expect(service).toBeTruthy();
  });
});
