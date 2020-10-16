import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {
  LocalstorageConfigs,
  LocalstorageIterateHandler,
  LocalstorageIterateKeysHandler,
} from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private Sheetbase: SheetbaseService) {}

  instance(storageConfigs: LocalstorageConfigs) {
    return this.Sheetbase.localstorage().instance(storageConfigs);
  }

  set<Data>(key: string, data: Data) {
    return from(this.Sheetbase.localstorage().set<Data>(key, data));
  }

  get<Data>(key: string) {
    return from(this.Sheetbase.localstorage().get<Data>(key));
  }

  iterate<Data>(handler: LocalstorageIterateHandler<Data>) {
    return from(this.Sheetbase.localstorage().iterate<Data>(handler));
  }

  iterateKeys(handler: LocalstorageIterateKeysHandler) {
    return from(this.Sheetbase.localstorage().iterateKeys(handler));
  }

  remove(key: string) {
    return from(this.Sheetbase.localstorage().remove(key));
  }

  removeBulk(keys: string[]) {
    return from(this.Sheetbase.localstorage().removeBulk(keys));
  }

  removeByPrefix(prefix: string) {
    return from(this.Sheetbase.localstorage().removeByPrefix(prefix));
  }

  removeBySuffix(suffix: string) {
    return from(this.Sheetbase.localstorage().removeBySuffix(suffix));
  }

  clear() {
    return from(this.Sheetbase.localstorage().clear());
  }

  keys() {
    return from(this.Sheetbase.localstorage().keys());
  }

}
