import { Injectable } from '@angular/core';

import { Audio } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private sheet = 'audios';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Audio>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Audio>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Audio>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Audio>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.Database.itemsDraft<Audio>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.Database.itemsPublished<Audio>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.Database.itemsArchived<Audio>(this.sheet, options);
  }

  itemsByRelated(baseItem: Audio, options?: ItemsOptions) {
    return this.Database.itemsByRelated<Audio>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.Database.itemsByType<Audio>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.Database.itemsByTypeDefault<Audio>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.Database.itemsByAuthor<Audio>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.Database.itemsByLocale<Audio>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.Database.itemsByOrigin<Audio>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.Database.itemsByParent<Audio>(this.sheet, parentKey, options);
  }

  itemsByGenre(genreKey: string, options?: ItemsOptions) {
    return this.Database.itemsByTerm<Audio>(this.sheet, 'genres', genreKey, options);
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.Database.itemsByCategory<Audio>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.Database.itemsByTag<Audio>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.Database.itemsByKeyword<Audio>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Audio>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Audio>(this.sheet, metaKey, equalTo, options);
  }

  viewing(key: string) {
    return this.Database.viewing(this.sheet, key);
  }

  liking(key: string) {
    return this.Database.liking(this.sheet, key);
  }

  commenting(key: string) {
    return this.Database.commenting(this.sheet, key);
  }

  rating(key: string, stars: number) {
    return this.Database.rating(this.sheet, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.Database.sharing(this.sheet, key, providers);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
