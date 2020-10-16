import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('VideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: VideoService = TestBed.get(VideoService);
    expect(service).toBeTruthy();
  });
});
