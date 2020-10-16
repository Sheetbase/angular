import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
