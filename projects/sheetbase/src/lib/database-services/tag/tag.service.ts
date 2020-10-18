import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tag } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private sheetName = 'tags';

  constructor(
    private databaseService: DatabaseService,
  ) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Tag[]>;
  }

  items(filter?: Filter<Tag>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Tag[]>;
  }

  item(finder: string | Filter<Tag>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Tag>;
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
