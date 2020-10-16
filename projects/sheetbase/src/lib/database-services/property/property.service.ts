import { Injectable } from '@angular/core';
import { Property } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
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
    private databaseService: DatabaseService,
  ) {}

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Property>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Property>(this.sheet, finder, options);
  }

  add(item: Property) {
    return this.databaseService.add(this.sheet, null, item);
  }

  update(key: string, data: Property) {
    return this.databaseService.update(this.sheet, key, data);
  }

  addExtra(item: Property, endpoint = '/app/property') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      property: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
