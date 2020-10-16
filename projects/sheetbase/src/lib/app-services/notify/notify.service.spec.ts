import { TestBed } from '@angular/core/testing';
import { asyncData } from 'testing';

import { NotifyService } from './notify.service';
import { LocalstorageService } from '../../sheetbase-services/localstorage/localstorage.service';

class MockedLocalstorageService {
  get() {
    return asyncData(null);
  }
}

describe('NotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: LocalstorageService,
        useValue: new MockedLocalstorageService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: NotifyService = TestBed.get(NotifyService);
    expect(service).toBeTruthy();
  });
});
