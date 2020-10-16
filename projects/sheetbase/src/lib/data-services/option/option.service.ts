import { Injectable } from '@angular/core';

import { Option } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private sheet = 'options';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Option>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Option>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Option>(this.sheet, finder, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
