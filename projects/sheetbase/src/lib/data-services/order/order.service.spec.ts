import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

class MockedDatabaseService {}

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: DatabaseService,
        useValue: new MockedDatabaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});
