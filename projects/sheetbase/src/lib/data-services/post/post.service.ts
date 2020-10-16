import { Injectable } from '@angular/core';

import { Post } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private sheet = 'posts';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Post>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Post>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Post>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Post>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.Database.itemsDraft<Post>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.Database.itemsPublished<Post>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.Database.itemsArchived<Post>(this.sheet, options);
  }

  itemsByRelated(baseItem: Post, options?: ItemsOptions) {
    return this.Database.itemsByRelated<Post>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.Database.itemsByType<Post>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.Database.itemsByTypeDefault<Post>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.Database.itemsByAuthor<Post>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.Database.itemsByLocale<Post>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.Database.itemsByOrigin<Post>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.Database.itemsByParent<Post>(this.sheet, parentKey, options);
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.Database.itemsByCategory<Post>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.Database.itemsByTag<Post>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.Database.itemsByKeyword<Post>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Post>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Post>(this.sheet, metaKey, equalTo, options);
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
