import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Option } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private sheetName = 'options';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Option[]>;
  }

  items(filter?: Filter<Option>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Option[]>;
  }

  item(finder: string | Filter<Option>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Option>;
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
