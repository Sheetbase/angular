import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Property } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private sheetName = 'properties';

  constructor(
    private appService: AppService,
    private apiService: ApiService,
    private databaseService: DatabaseService,
  ) {}

  items(filter?: Filter<Property>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Property[]>;
  }

  item(finder: string | Filter<Property>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Property>;
  }

  add(item: Property) {
    return this.databaseService.add(this.sheetName, null, item);
  }

  update(key: string, data: Property) {
    return this.databaseService.update(this.sheetName, key, data);
  }

  addExtra(item: Property, endpoint = '/app/property') {
    return this.apiService.put(endpoint, {}, {
      host: this.appService['host'],
      property: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
