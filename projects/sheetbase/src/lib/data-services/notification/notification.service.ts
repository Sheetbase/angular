import { Injectable } from '@angular/core';

import { Notification } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private sheet = 'notifications';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Notification>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Notification>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Notification>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Notification>(this.sheet, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.Database.itemsByLocale<Notification>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.Database.itemsByOrigin<Notification>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Notification>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Notification>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
