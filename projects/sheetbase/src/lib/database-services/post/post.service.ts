import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private sheetName = 'posts';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Post[]>;
  }

  items(filter?: Filter<Post>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Post[]>;
  }

  item(finder: string | Filter<Post>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Post>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Post[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Post[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Post[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Post[]>;
  }

  itemsByRelated(baseItem: Post, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated(this.sheetName, baseItem as Record<string, unknown>, options) as Observable<Post[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Post[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Post[]>;
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor(this.sheetName, authorKey, options) as Observable<Post[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Post[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Post[]>;
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByParent(this.sheetName, parentKey, options) as Observable<Post[]>;
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory(this.sheetName, categoryKey, options) as Observable<Post[]>;
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag(this.sheetName, tagKey, options) as Observable<Post[]>;
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword(this.sheetName, keyword, options) as Observable<Post[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Post[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Post[]>;
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
