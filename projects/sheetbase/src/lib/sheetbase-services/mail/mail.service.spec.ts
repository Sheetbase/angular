import { TestBed } from '@angular/core/testing';

import { MailService } from './mail.service';
import { SheetbaseService } from '../sheetbase/sheetbase.service';

class MockedSheetbaseService {}

describe('MailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: SheetbaseService,
        useValue: new MockedSheetbaseService(),
      },
    ],
  }));

  it('should be created', () => {
    const service: MailService = TestBed.get(MailService);
    expect(service).toBeTruthy();
  });
});
