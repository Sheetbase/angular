import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private sheetName = 'videos';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Video[]>;
  }

  items(filter?: Filter<Video>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Video[]>;
  }

  item(finder: string | Filter<Video>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Video>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Video[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Video[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Video[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Video[]>;
  }

  itemsByRelated(baseItem: Video, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated(this.sheetName, baseItem as Record<string, unknown>, options) as Observable<Video[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Video[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Video[]>;
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor(this.sheetName, authorKey, options) as Observable<Video[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Video[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Video[]>;
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByParent(this.sheetName, parentKey, options) as Observable<Video[]>;
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory(this.sheetName, categoryKey, options) as Observable<Video[]>;
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag(this.sheetName, tagKey, options) as Observable<Video[]>;
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword(this.sheetName, keyword, options) as Observable<Video[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Video[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Video[]>;
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
