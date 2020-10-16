import { TestBed } from '@angular/core/testing';

import { AudioService } from './audio.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('AudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: AudioService = TestBed.get(AudioService);
    expect(service).toBeTruthy();
  });
});
