import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Page } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private sheetName = 'pages';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Page[]>;
  }

  items(filter?: Filter<Page>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Page[]>;
  }

  item(finder: string | Filter<Page>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Page>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Page[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Page[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Page[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Page[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Page[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Page[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Page[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Page[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Page[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Page[]>;
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
