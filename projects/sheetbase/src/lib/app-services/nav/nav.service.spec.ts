import { TestBed } from '@angular/core/testing';

import { NavService } from './nav.service';
import { Title, Meta } from '@angular/platform-browser';

class MockedTitle {

}

class MockedMeta {

}

describe('NavService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: Title,
        useValue: new MockedTitle(),
      },
      {
        provide: Meta,
        useValue: new MockedMeta(),
      },
    ]
  }));

  it('should be created', () => {
    const service: NavService = TestBed.get(NavService);
    expect(service).toBeTruthy();
  });
});
