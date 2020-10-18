import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {
  CacheRefresher,
  LocalstorageConfigs,
  LocalstorageIterateHandler,
  LocalstorageIterateKeysHandler,
} from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private sheetbaseService: SheetbaseService) {}

  extend(storageConfigs: LocalstorageConfigs) {
    return this.sheetbaseService.cache().extend(storageConfigs);
  }

  set<Data>(key: string, data: Data, cacheTime?: number) {
    return from(this.sheetbaseService.cache().set(key, data, cacheTime));
  }

  get<Data>(key: string, refresher?: CacheRefresher<Data>, cacheTime?: number) {
    return from(this.sheetbaseService.cache().get<Data>(key, refresher, cacheTime));
  }

  iterate<Data>(handler: LocalstorageIterateHandler<Data>) {
    return from(this.sheetbaseService.cache().iterate(handler));
  }

  iterateKeys(handler: LocalstorageIterateKeysHandler) {
    return from(this.sheetbaseService.cache().iterateKeys(handler));
  }

  remove(key: string) {
    return from(this.sheetbaseService.cache().remove(key));
  }

  removeBulk(keys: string[]) {
    return from(this.sheetbaseService.cache().removeBulk(keys));
  }

  removeByPrefix(prefix: string) {
    return from(this.sheetbaseService.cache().removeByPrefix(prefix));
  }

  removeBySuffix(suffix: string) {
    return from(this.sheetbaseService.cache().removeBySuffix(suffix));
  }

  flush() {
    return from(this.sheetbaseService.cache().flush());
  }

  flushExpired() {
    return from(this.sheetbaseService.cache().flushExpired());
  }

}
