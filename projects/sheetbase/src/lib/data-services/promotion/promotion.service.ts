import { Injectable } from '@angular/core';

import { Promotion } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private sheet = 'promotions';

  constructor(private Database: DatabaseService) {}

  all(cacheTime?: number) {
    return this.Database.all<Promotion>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Promotion>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Promotion>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Promotion>(this.sheet, options);
  }

  itemsKindAuto(options?: ItemsOptions) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !item.kind ||
        item.kind === 'auto'
      ),
      options,
    );
  }

  itemsKindCode(options?: ItemsOptions) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'code'
      ),
      options,
    );
  }

  itemsKindCustom(options?: ItemsOptions) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'custom'
      ),
      options,
    );
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.Database.itemsByLocale<Promotion>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.Database.itemsByOrigin<Promotion>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Promotion>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Promotion>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
