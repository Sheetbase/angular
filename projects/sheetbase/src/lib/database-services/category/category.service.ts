import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private sheetName = 'categories';

  constructor(private databaseService: DatabaseService) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Category[]>;
  }

  items(filter?: Filter<Category>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Category[]>;
  }

  item(finder: string | Filter<Category>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Category>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Category[]>;
  }

  itemsByLocale(locale: string, options?: ItemsOptions) {
    return this.databaseService.itemsByLocale(this.sheetName, locale, options) as Observable<Category[]>;
  }

  itemsByOrigin(origin: string, options?: ItemsOptions) {
    return this.databaseService.itemsByOrigin(this.sheetName, origin, options) as Observable<Category[]>;
  }

  itemsByContent(
    contentType: string,
    subType: string = '*',
    options?: ItemsOptions,
  ) {
    return this.items(
      (category: Category) => (
        !category.only ||
        category.only.indexOf(contentType + ':*') > -1 ||
        category.only.indexOf(contentType + ':' + subType) > -1
      ),
      options,
    ) as Observable<Category[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Category[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Category[]>;
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
