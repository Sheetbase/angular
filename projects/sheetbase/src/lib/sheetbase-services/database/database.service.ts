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

  constructor(private sheetbaseService: SheetbaseService) {}

  direct() {
    return this.sheetbaseService.database().direct();
  }

  indirect() {
    return this.sheetbaseService.database().indirect();
  }

  setSegmentation(globalSegment: DataSegment) {
    return this.sheetbaseService.database().setSegmentation(globalSegment);
  }

  registerDataParser(parser: DataParser) {
    return this.sheetbaseService.database().registerDataParser(parser);
  }

  all<Item extends Record<string, unknown>>(sheet: string, cacheTime?: number) {
    return from(this.sheetbaseService.database().all<Item>(sheet, cacheTime));
  }

  query<Item extends Record<string, unknown>>(sheet: string, filter: Filter<Item>, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().query<Item>(sheet, filter, options));
  }

  items<Item extends Record<string, unknown>>(sheet: string, filter?: Filter<Item>, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().items<Item>(sheet, filter, options));
  }

  item<Item extends Record<string, unknown>>(sheet: string, finder: string | Filter<Item>, options?: ItemOptions) {
    return from(this.sheetbaseService.database().item<Item>(sheet, finder, options));
  }

  docsContent(
    docId: string,
    docsStyle?: DocsContentStyle,
    cacheTime?: number,
  ) {
    return from(this.sheetbaseService.database().docsContent(docId, docsStyle, cacheTime));
  }

  textContent(url: string, cacheTime?: number) {
    return from(this.sheetbaseService.database().textContent(url, cacheTime));
  }

  jsonContent(url: string, cacheTime?: number) {
    return from(this.sheetbaseService.database().jsonContent(url, cacheTime));
  }

  set<Data>(sheet: string, key: string, data: Data) {
    return from(this.sheetbaseService.database().set(sheet, key, data));
  }

  update<Data>(sheet: string, key: string, data: Data) {
    return from(this.sheetbaseService.database().update(sheet, key, data));
  }

  add<Data>(sheet: string, key: string, data: Data) {
    return from(this.sheetbaseService.database().add(sheet, key, data));
  }

  remove(sheet: string, key: string) {
    return from(this.sheetbaseService.database().remove(sheet, key));
  }

  increase(
    sheet: string,
    key: string,
    increasing: string | string[] | {[path: string]: number},
  ) {
    return from(this.sheetbaseService.database().increase(sheet, key, increasing));
  }

  clearCachedAll(input: string | string[]) {
    return this.sheetbaseService.database().clearCachedAll(input);
  }

  clearCachedItem(sheet: string, itemKey: string) {
    return from(this.sheetbaseService.database().clearCachedItem(sheet, itemKey));
  }

  itemsOriginal<Item extends Record<string, unknown>>(sheet: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsOriginal<Item>(sheet, options));
  }

  itemsDraft<Item extends Record<string, unknown>>(sheet: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsDraft<Item>(sheet, options));
  }

  itemsPublished<Item extends Record<string, unknown>>(sheet: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsPublished<Item>(sheet, options));
  }

  itemsArchived<Item extends Record<string, unknown>>(sheet: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsArchived<Item>(sheet, options));
  }

  itemsByRelated<Item extends Record<string, unknown>>(sheet: string, baseItem: Item, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByRelated<Item>(sheet, baseItem, options));
  }

  itemsByType<Item extends Record<string, unknown>>(sheet: string, type: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByType<Item>(sheet, type, options));
  }

  itemsByTypeDefault<Item extends Record<string, unknown>>(sheet: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByTypeDefault<Item>(sheet, options));
  }

  itemsByAuthor<Item extends Record<string, unknown>>(sheet: string, authorKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByAuthor<Item>(sheet, authorKey, options));
  }

  itemsByLocale<Item extends Record<string, unknown>>(sheet: string, locale: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByLocale<Item>(sheet, locale, options));
  }

  itemsByOrigin<Item extends Record<string, unknown>>(sheet: string, origin: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByOrigin<Item>(sheet, origin, options));
  }

  itemsByParent<Item extends Record<string, unknown>>(sheet: string, parentKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByParent<Item>(sheet, parentKey, options));
  }

  itemsByTerm<Item extends Record<string, unknown>>(sheet: string, taxonomy: string, termKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByTerm<Item>(sheet, taxonomy, termKey, options));
  }

  itemsByCategory<Item extends Record<string, unknown>>(sheet: string, categoryKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByCategory<Item>(sheet, categoryKey, options));
  }

  itemsByTag<Item extends Record<string, unknown>>(sheet: string, tagKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByTag<Item>(sheet, tagKey, options));
  }

  itemsByKeyword<Item extends Record<string, unknown>>(sheet: string, keyword: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByKeyword<Item>(sheet, keyword, options));
  }

  itemsByMetaExists<Item extends Record<string, unknown>>(sheet: string, metaKey: string, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByMetaExists<Item>(sheet, metaKey, options));
  }

  itemsByMetaEquals<Item extends Record<string, unknown>>(sheet: string, metaKey: string, equalTo: any, options?: ItemsOptions) {
    return from(this.sheetbaseService.database().itemsByMetaEquals<Item>(sheet, metaKey, equalTo, options));
  }

  viewing(sheet: string, key: string) {
    return from(this.sheetbaseService.database().viewing(sheet, key));
  }

  liking(sheet: string, key: string) {
    return from(this.sheetbaseService.database().liking(sheet, key));
  }

  commenting(sheet: string, key: string) {
    return from(this.sheetbaseService.database().commenting(sheet, key));
  }

  rating(sheet: string, key: string, stars: number) {
    return from(this.sheetbaseService.database().rating(sheet, key, stars));
  }

  sharing(sheet: string, key: string, providers?: string[]) {
    return from(this.sheetbaseService.database().sharing(sheet, key, providers));
  }

}
