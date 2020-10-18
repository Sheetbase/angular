import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audio } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private sheetName = 'audios';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Audio[]>;
  }

  items(filter?: Filter<Audio>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Audio[]>;
  }

  item(finder: string | Filter<Audio>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Audio>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Audio[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Audio[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Audio[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Audio[]>;
  }

  itemsByRelated(baseItem: Audio, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated(this.sheetName, baseItem as Record<string, unknown>, options) as Observable<Audio[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Audio[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Audio[]>;
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor(this.sheetName, authorKey, options) as Observable<Audio[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Audio[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Audio[]>;
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByParent(this.sheetName, parentKey, options) as Observable<Audio[]>;
  }

  itemsByGenre(genreKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTerm(this.sheetName, 'genres', genreKey, options) as Observable<Audio[]>;
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory(this.sheetName, categoryKey, options) as Observable<Audio[]>;
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag(this.sheetName, tagKey, options) as Observable<Audio[]>;
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword(this.sheetName, keyword, options) as Observable<Audio[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Audio[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Audio[]>;
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
