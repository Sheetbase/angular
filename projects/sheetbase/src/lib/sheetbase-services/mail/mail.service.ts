import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { MailingData } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private sheetbaseService: SheetbaseService) {}

  quota() {
    return from(this.sheetbaseService.mail().quota());
  }

  send(
    mailingData: MailingData,
    category = 'uncategorized',
    template = null,
    silent = null,
  ) {
    return from(this.sheetbaseService.mail().send(mailingData, category, template, silent));
  }

}
