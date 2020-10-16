import { Injectable } from '@angular/core';
import { Bundle } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private sheet = 'bundles';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all<Bundle>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Bundle>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Bundle>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal<Bundle>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft<Bundle>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished<Bundle>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived<Bundle>(this.sheet, options);
  }

  itemsByRelated(baseItem: Bundle, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated<Bundle>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType<Bundle>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault<Bundle>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor<Bundle>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale<Bundle>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin<Bundle>(this.sheet, origin, options);
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory<Bundle>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag<Bundle>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword<Bundle>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Bundle>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Bundle>(this.sheet, metaKey, equalTo, options);
  }

  viewing(key: string) {
    return this.databaseService.viewing(this.sheet, key);
  }

  liking(key: string) {
    return this.databaseService.liking(this.sheet, key);
  }

  commenting(key: string) {
    return this.databaseService.commenting(this.sheet, key);
  }

  rating(key: string, stars: number) {
    return this.databaseService.rating(this.sheet, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.databaseService.sharing(this.sheet, key, providers);
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
