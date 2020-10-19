import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private sheetName = 'products';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as unknown as Observable<Product[]>;
  }

  items(filter?: Filter<Product>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter as unknown, options) as unknown as Observable<Product[]>;
  }

  item(finder: string | Filter<Product>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder as unknown, options) as unknown as Observable<Product>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as unknown as Observable<Product[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as unknown as Observable<Product[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as unknown as Observable<Product[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as unknown as Observable<Product[]>;
  }

  itemsByRelated(baseItem: Product, options?: ItemsOptions) {
    return this.databaseService.itemsByRelated(this.sheetName, baseItem as unknown as Record<string, unknown>, options) as unknown as Observable<Product[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as unknown as Observable<Product[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as unknown as Observable<Product[]>;
  }

  itemsByAuthor(authorKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByAuthor(this.sheetName, authorKey, options) as unknown as Observable<Product[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as unknown as Observable<Product[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as unknown as Observable<Product[]>;
  }

  itemsByParent(parentKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByParent(this.sheetName, parentKey, options) as unknown as Observable<Product[]>;
  }

  itemsByCategory(categoryKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByCategory(this.sheetName, categoryKey, options) as unknown as Observable<Product[]>;
  }

  itemsByTag(tagKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByTag(this.sheetName, tagKey, options) as unknown as Observable<Product[]>;
  }

  itemsByKeyword(keyword: string, options?: ItemsOptions) {
    return this.databaseService.itemsByKeyword(this.sheetName, keyword, options) as unknown as Observable<Product[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as unknown as Observable<Product[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as unknown as Observable<Product[]>;
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
