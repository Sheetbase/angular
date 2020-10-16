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

  constructor(private sheetbaseService: SheetbaseService) {}

  instance(storageConfigs: LocalstorageConfigs) {
    return this.sheetbaseService.localstorage().instance(storageConfigs);
  }

  set<Data>(key: string, data: Data) {
    return from(this.sheetbaseService.localstorage().set<Data>(key, data));
  }

  get<Data>(key: string) {
    return from(this.sheetbaseService.localstorage().get<Data>(key));
  }

  iterate<Data>(handler: LocalstorageIterateHandler<Data>) {
    return from(this.sheetbaseService.localstorage().iterate<Data>(handler));
  }

  iterateKeys(handler: LocalstorageIterateKeysHandler) {
    return from(this.sheetbaseService.localstorage().iterateKeys(handler));
  }

  remove(key: string) {
    return from(this.sheetbaseService.localstorage().remove(key));
  }

  removeBulk(keys: string[]) {
    return from(this.sheetbaseService.localstorage().removeBulk(keys));
  }

  removeByPrefix(prefix: string) {
    return from(this.sheetbaseService.localstorage().removeByPrefix(prefix));
  }

  removeBySuffix(suffix: string) {
    return from(this.sheetbaseService.localstorage().removeBySuffix(suffix));
  }

  clear() {
    return from(this.sheetbaseService.localstorage().clear());
  }

  keys() {
    return from(this.sheetbaseService.localstorage().keys());
  }

}
