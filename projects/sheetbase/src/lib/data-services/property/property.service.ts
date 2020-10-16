import { Injectable } from '@angular/core';

import { Property } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../app-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private sheet = 'properties';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private Database: DatabaseService,
  ) {}

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Property>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Property>(this.sheet, finder, options);
  }

  add(item: Property) {
    return this.Database.add(this.sheet, null, item);
  }

  update(key: string, data: Property) {
    return this.Database.update(this.sheet, key, data);
  }

  addExtra(item: Property, endpoint = '/app/property') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      property: item,
    });
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
