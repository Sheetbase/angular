import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Promotion } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private sheetName = 'promotions';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Promotion[]>;
  }

  items(filter?: Filter<Promotion>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Promotion[]>;
  }

  item(finder: string | Filter<Promotion>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Promotion>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Promotion[]>;
  }

  itemsKindAuto(options?: ItemsOptions) {
    return this.databaseService.items(
      this.sheetName,
      (item: Promotion) => (
        !item.kind ||
        item.kind === 'auto'
      ),
      options,
    ) as Observable<Promotion[]>;
  }

  itemsKindCode(options?: ItemsOptions) {
    return this.databaseService.items(
      this.sheetName,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'code'
      ),
      options,
    ) as Observable<Promotion[]>;
  }

  itemsKindCustom(options?: ItemsOptions) {
    return this.databaseService.items(
      this.sheetName,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'custom'
      ),
      options,
    ) as Observable<Promotion[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Promotion[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Promotion[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Promotion[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Promotion[]>;
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
