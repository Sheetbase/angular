import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bundle } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private sheetName = 'bundles';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Bundle[]>;
  }

  items(filter?: Filter<Bundle>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Bundle[]>;
  }

  item(finder: string | Filter<Bundle>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Bundle>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Bundle[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Bundle[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Bundle[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Bundle[]>;
  }

  itemsByRelated(baseItem: Bundle, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated(this.sheetName, baseItem as Record<string, unknown>, options) as Observable<Bundle[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Bundle[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Bundle[]>;
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor(this.sheetName, authorKey, options) as Observable<Bundle[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Bundle[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Bundle[]>;
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory(this.sheetName, categoryKey, options) as Observable<Bundle[]>;
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag(this.sheetName, tagKey, options) as Observable<Bundle[]>;
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword(this.sheetName, keyword, options) as Observable<Bundle[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Bundle[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Bundle[]>;
  }

  viewing(key: string) {
    return this.databaseService.viewing(this.sheetName, key);
  }

  liking(key: string) {
    return this.databaseService.liking(this.sheetName, key);
  }

  commenting(key: string) {
    return this.databaseService.commenting(this.sheetName, key);
  }

  rating(key: string, stars: number) {
    return this.databaseService.rating(this.sheetName, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.databaseService.sharing(this.sheetName, key, providers);
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
