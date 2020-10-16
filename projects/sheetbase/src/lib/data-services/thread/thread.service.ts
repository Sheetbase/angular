import { Injectable } from '@angular/core';

import { Thread } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../app-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private sheet = 'threads';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private Database: DatabaseService,
  ) {}

  all(cacheTime?: number) {
    return this.Database.all<Thread>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.Database.items<Thread>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.Database.item<Thread>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.Database.itemsOriginal<Thread>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.Database.itemsDraft<Thread>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.Database.itemsPublished<Thread>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.Database.itemsArchived<Thread>(this.sheet, options);
  }

  itemsTopLevel(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.parent,
      options,
    );
  }

  itemsStandalone(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.master,
      options,
    );
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.Database.itemsByType<Thread>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.Database.itemsByTypeDefault<Thread>(this.sheet, options);
  }

  itemsByMaster(
    contentType: string,
    masterKey: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.master &&
        item.master === `${contentType}:${masterKey}`
      ),
      options,
    );
  }

  itemsByThread(
    threadKey: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.parent &&
        item.parent === threadKey
      ),
      options,
    );
  }

  itemsByUid(
    uid: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.uid &&
        item.uid === uid
      ),
      options,
    );
  }

  itemsByEmail(
    email: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.email &&
        item.email === email
      ),
      options,
    );
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaExists<Thread>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.Database.itemsByMetaEquals<Thread>(this.sheet, metaKey, equalTo, options);
  }

  viewing(key: string) {
    return this.Database.viewing(this.sheet, key);
  }

  liking(key: string) {
    return this.Database.liking(this.sheet, key);
  }

  commenting(key: string) {
    return this.Database.commenting(this.sheet, key);
  }

  rating(key: string, stars: number) {
    return this.Database.rating(this.sheet, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.Database.sharing(this.sheet, key, providers);
  }

  add(item: Thread) {
    return this.Database.add(this.sheet, null, item);
  }

  addExtra(item: Thread, endpoint = '/app/thread') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      thread: item,
    });
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
