import { Injectable } from '@angular/core';

import { Page } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private sheet = 'pages';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Page>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Page>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Page>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Page>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.Database.itemsDraft<Page>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.Database.itemsPublished<Page>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.Database.itemsArchived<Page>(this.sheet, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.Database.itemsByType<Page>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.Database.itemsByTypeDefault<Page>(this.sheet, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.Database.itemsByLocale<Page>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.Database.itemsByOrigin<Page>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Page>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Page>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
