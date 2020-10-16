import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {
  Filter,
  DataParser,
  DataSegment,
  DocsContentStyle,
  ItemsOptions,
  ItemOptions,
} from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private Sheetbase: SheetbaseService) {}

  direct() {
    return this.Sheetbase.database().direct();
  }

  server() {
    return this.Sheetbase.database().server();
  }

  setSegmentation(globalSegment: DataSegment) {
    return this.Sheetbase.database().setSegmentation(globalSegment);
  }

  registerDataParser(parser: DataParser) {
    return this.Sheetbase.database().registerDataParser(parser);
  }


  /**
   * general get
   */

  all<Item>(sheet: string, cacheTime?: number) {
    return from(this.Sheetbase.database().all<Item>(sheet, cacheTime));
  }

  query<Item>(sheet: string, filter: Filter, options?: ItemsOptions) {
    return from(this.Sheetbase.database().query<Item>(sheet, filter, options));
  }

  items<Item>(sheet: string, filter?: Filter, options?: ItemsOptions) {
    return from(this.Sheetbase.database().items<Item>(sheet, filter, options));
  }

  item<Item>(sheet: string, finder: string | Filter, options?: ItemOptions) {
    return from(this.Sheetbase.database().item<Item>(sheet, finder, options));
  }

  docsContent(
    itemKey: string,
    docId: string,
    docsStyle?: DocsContentStyle,
    cacheTime?: number,
  ) {
    return from(this.Sheetbase.database().docsContent(itemKey, docId, docsStyle, cacheTime));
  }

  textContent(itemKey: string, url: string, cacheTime?: number) {
    return from(this.Sheetbase.database().textContent(itemKey, url, cacheTime));
  }

  jsonContent(itemKey: string, url: string, cacheTime?: number) {
    return from(this.Sheetbase.database().jsonContent(itemKey, url, cacheTime));
  }

  /**
   * general set
   */

  set<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().set(sheet, key, data));
  }

  update<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().update(sheet, key, data));
  }

  add<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().add(sheet, key, data));
  }

  remove(sheet: string, key: string) {
    return from(this.Sheetbase.database().remove(sheet, key));
  }

  increase(
    sheet: string,
    key: string,
    increasing: string | string[] | {[path: string]: number},
  ) {
    return from(this.Sheetbase.database().increase(sheet, key, increasing));
  }

  /**
   * manage cache
   */

  clearCachedAll(input: string | string[]) {
    return from(this.Sheetbase.database().clearCachedAll(input));
  }

  clearCachedItem(sheet: string, itemKey: string) {
    return from(this.Sheetbase.database().clearCachedItem(sheet, itemKey));
  }

  /**
   * util get
   */

  itemsOriginal<Item>(sheet: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsOriginal<Item>(sheet, options));
  }

  itemsDraft<Item>(sheet: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsDraft<Item>(sheet, options));
  }

  itemsPublished<Item>(sheet: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsPublished<Item>(sheet, options));
  }

  itemsArchived<Item>(sheet: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsArchived<Item>(sheet, options));
  }

  itemsByRelated<Item>(sheet: string, baseItem: Item, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByRelated<Item>(sheet, baseItem, options));
  }

  itemsByType<Item>(sheet: string, type: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByType<Item>(sheet, type, options));
  }

  itemsByTypeDefault<Item>(sheet: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByTypeDefault<Item>(sheet, options));
  }

  itemsByAuthor<Item>(sheet: string, authorKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByAuthor<Item>(sheet, authorKey, options));
  }

  itemsByLocale<Item>(sheet: string, locale: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByLocale<Item>(sheet, locale, options));
  }

  itemsByOrigin<Item>(sheet: string, origin: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByOrigin<Item>(sheet, origin, options));
  }

  itemsByParent<Item>(sheet: string, parentKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByParent<Item>(sheet, parentKey, options));
  }

  itemsByTerm<Item>(sheet: string, taxonomy: string, termKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByTerm<Item>(sheet, taxonomy, termKey, options));
  }

  itemsByCategory<Item>(sheet: string, categoryKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByCategory<Item>(sheet, categoryKey, options));
  }

  itemsByTag<Item>(sheet: string, tagKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByTag<Item>(sheet, tagKey, options));
  }

  itemsByKeyword<Item>(sheet: string, keyword: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByKeyword<Item>(sheet, keyword, options));
  }

  itemsByMetaExists<Item>(sheet: string, metaKey: string, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByMetaExists<Item>(sheet, metaKey, options));
  }

  itemsByMetaEquals<Item>(sheet: string, metaKey: string, equalTo: any, options?: ItemsOptions) {
    return from(this.Sheetbase.database().itemsByMetaEquals<Item>(sheet, metaKey, equalTo, options));
  }

  /**
   * util set
   */

  viewing(sheet: string, key: string) {
    return from(this.Sheetbase.database().viewing(sheet, key));
  }

  liking(sheet: string, key: string) {
    return from(this.Sheetbase.database().liking(sheet, key));
  }

  commenting(sheet: string, key: string) {
    return from(this.Sheetbase.database().commenting(sheet, key));
  }

  rating(sheet: string, key: string, stars: number) {
    return from(this.Sheetbase.database().rating(sheet, key, stars));
  }

  sharing(sheet: string, key: string, providers?: string[]) {
    return from(this.Sheetbase.database().sharing(sheet, key, providers));
  }

}
