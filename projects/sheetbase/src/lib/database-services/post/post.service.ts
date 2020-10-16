import { Injectable } from '@angular/core';
import { Post } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private sheet = 'posts';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all<Post>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Post>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Post>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal<Post>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft<Post>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished<Post>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived<Post>(this.sheet, options);
  }

  itemsByRelated(baseItem: Post, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated<Post>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType<Post>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault<Post>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor<Post>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale<Post>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin<Post>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByParent<Post>(this.sheet, parentKey, options);
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory<Post>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag<Post>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword<Post>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Post>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Post>(this.sheet, metaKey, equalTo, options);
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
