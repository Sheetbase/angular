import { TestBed } from '@angular/core/testing';
import { asyncData } from 'testing';

import { CartService } from './cart.service';
import { AppService } from '../app/app.service';
import { LocalstorageService } from '../../sheetbase-services/localstorage/localstorage.service';

class MockedAppService {}

class MockedLocalstorageService {
  get() {
    return asyncData(null);
  }
}

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AppService,
        useValue: new MockedAppService()
      },
      {
        provide: LocalstorageService,
        useValue: new MockedLocalstorageService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
