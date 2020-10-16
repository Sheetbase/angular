import { Injectable } from '@angular/core';
import { Notification } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private sheet = 'notifications';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all<Notification>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Notification>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Notification>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal<Notification>(this.sheet, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale<Notification>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin<Notification>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Notification>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Notification>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
