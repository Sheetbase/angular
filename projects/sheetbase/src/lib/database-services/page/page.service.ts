import { Injectable } from '@angular/core';
import { Page } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private sheet = 'pages';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all<Page>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Page>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Page>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal<Page>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft<Page>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished<Page>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived<Page>(this.sheet, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType<Page>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault<Page>(this.sheet, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale<Page>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin<Page>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Page>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Page>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
