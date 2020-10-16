import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { MailingData } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private Sheetbase: SheetbaseService) {}

  quota() {
    return from(this.Sheetbase.mail().quota());
  }

  send(
    mailingData: MailingData,
    category = 'uncategorized',
    template = null,
    silent = null,
  ) {
    return from(this.Sheetbase.mail().send(mailingData, category, template, silent));
  }

}
