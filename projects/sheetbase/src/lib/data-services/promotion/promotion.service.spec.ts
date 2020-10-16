import { TestBed } from '@angular/core/testing';

import { PromotionService } from './promotion.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('PromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: PromotionService = TestBed.get(PromotionService);
    expect(service).toBeTruthy();
  });
});
